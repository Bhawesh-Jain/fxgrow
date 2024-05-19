import connectMongoDb from "@/libs/mongodb";
import Order from "@/models/Order";
import Transaction from "@/models/Transactions";
import { NextResponse } from "next/server";




export async function GET(request, { params }) {
  const id = request.nextUrl.searchParams.get("userId");

  await connectMongoDb();

  let message = "Request Failed";
  let status = false;

  const orderData = await Order.find({ userId: id, status: "CLOSE" });
  const transactions = await Transaction.find({ userId: id });

  const formatOrderDate = (date) => {
    const [dd, mm, yyyy] = date.split('-');
    const d = new Date();
    d.setDate(dd)
    d.setMonth(mm - 1)
    d.setFullYear(yyyy)

    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const formatDate = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}-${month}-${year}`;
  };

  let totalCredit = 0;
  let totalDebit = 0;

  // Normalize the date fields and determine effect (debit or credit)
  const normalizedOrderData = orderData.map(order => {
    const effect = order.profit >= 0 ? 'Credit' : 'Debit';
    const amount = parseFloat(order.amount) || 0;

    if (effect === 'Credit') {
      totalCredit += amount;
    } else {
      totalDebit += amount;
    }

    return {
      type: order.profit >= 0 ? 'Profit' : 'Loss',
      amount: order.profit,
      date: formatOrderDate(order.date),
      effect: effect,
      normalizedDate: formatOrderDate(order.date),
    };
  });

  const normalizedTransactions = transactions.map(transaction => {
    let effect;
    const amount = parseFloat(transaction.amount) || 0;

    if (transaction.type === 'Withdraw' || (transaction.type === 'Loan' && amount < 0)) {
      effect = 'Debit';
      totalDebit += amount;
    } else if (transaction.type === 'Deposit' || (transaction.type === 'Loan' && amount > 0)) {
      effect = 'Credit';
      totalCredit += amount;
    } else {
      effect = 'Unknown';
    }

    return {
      type: transaction.type,
      amount: transaction.amount,
      date: formatDate(transaction.updatedAt), // Ensure the date is in "dd-MM-yyyy" format
      effect: effect,
      normalizedDate: formatDate(transaction.updatedAt),
    };
  });

  // Merge and sort the lists
  const combinedData = [...normalizedOrderData, ...normalizedTransactions]
  // Function to convert date strings to Date objects for comparison
  function parseDate(dateString) {
    const [day, month, year] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  // Sorting the data based on the 'date' field
  combinedData.sort((a, b) => parseDate(a.date) - parseDate(b.date)).reverse();

  if (combinedData.length > 0) {
    message = "Found Data";
    status = true;
  }

  const totals = {
    totalCredit: totalCredit.toFixed(2),
    totalDebit: totalDebit.toFixed(2),
    total: (totalCredit - totalDebit).toFixed(2)
  };

  return NextResponse.json({ status: status, message: message, totals: totals, data: combinedData }, { status: 200 });
}