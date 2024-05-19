import Logout from "@/app/ui/logout/logout";
import { getSession, logout } from "@/libs/actions"
import { RiUserFill } from "react-icons/ri"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getUserById = async (id) => {
   try {
      const res = await fetch(`${baseUrl}/api/dashboard/user/${id}`, {
         method: "GET",
         cache: "no-store"
      });

      if (res.ok) {
         var body = await res.json()

         if (body.status) {
            return body.data;
         }
      }
   } catch (error) {
      console.log(error);
   }
}
const Profile = async () => {

   const session = await getSession()

   const user = await getUserById(session.userId)


   return (
      <div className="grid w-full p-5 md:p-10 text-sm gap-4">

         <div className="col-span-2 flex flex-row gap-3 items-center text-lg font-bold">
            <RiUserFill />
            <h2>Account Info</h2>
         </div>

         <div className="grid gap-4 sm:grid-cols-2 w-full sm:gap-6">
            <div className="sm:col-span-2">
               <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
               <input defaultValue={user.email} disabled type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your email" required />
            </div>

            <div className="w-full">
               <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
               <input defaultValue={user.name}  disabled type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your name" required />
            </div>

            <div className="w-full">
               <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
               <input defaultValue={user.phone} disabled type="text" pattern="\d*" inputMode="numeric" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter phone number" required />
            </div>

            <div className="w-full">
               <label htmlFor="aadhar" className="block mb-2 text-sm font-medium text-gray-900">Aadhar No.</label>
               <input defaultValue={user.aadharNo} disabled type="text" pattern="\d*" inputMode="numeric" name="aadhar" id="aadhar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your aadhar no" required />
            </div>

            <div className="w-full">
               <label htmlFor="pan" className="block mb-2 text-sm font-medium text-gray-900">Pan</label>
               <input defaultValue={user.panNo} disabled type="text" name="pan" id="pan" className="bg-gray-50 uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter pan number" required />
            </div>

            <div>
               <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
               <select disabled defaultValue={user.gender} id="category" name="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                  <option defaultValue="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
               </select>
            </div>

            <div>
               <label htmlFor="dob" className="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
               <input defaultValue={user.dob} disabled type="date"  name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
            </div>

            <div className="w-full">
               <label htmlFor="nominee-name" className="block mb-2 text-sm font-medium text-gray-900">Nominee Name</label>
               <input defaultValue={user.nomineeName} disabled type="text" name="nomineeName" id="nominee-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Nominee Name" required />
            </div>

            <div className="w-full">
               <label htmlFor="nominee-relation" className="block mb-2 text-sm font-medium text-gray-900">Nominee Relation</label>
               <input defaultValue={user.nomineeRelation} disabled type="text" name="nomineeRelation" id="nominee-relation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter Nominee Relation" required />
            </div>

            <div className="w-full">
               <label htmlFor="bank-name" className="block mb-2 text-sm font-medium text-gray-900">Bank Name</label>
               <input defaultValue={user.bankName} disabled type="text" name="bank-name" id="bank-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your bank name" required />
            </div>

            <div className="w-full">
               <label htmlFor="acc-number" className="block mb-2 text-sm font-medium text-gray-900">Account Number</label>
               <input defaultValue={user.accountNumber} disabled type="text" pattern="\d*" inputMode="numeric" name="acc-number" id="acc-number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter account number" required />
            </div>

            <div className="w-full">
               <label htmlFor="acc-holder" className="block mb-2 text-sm font-medium text-gray-900">Account Holder</label>
               <input defaultValue={user.accountHolder} disabled type="text" name="acc-holder" id="acc-holder" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter account holder" required />
            </div>

            <div className="w-full">
               <label htmlFor="ifsc-code" className="block mb-2 text-sm font-medium text-gray-900">IFSC Code</label>
               <input defaultValue={user.ifscCode} disabled type="text" name="ifsc-code" id="ifsc-code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter ifsc code" required />
            </div>

            <div className="sm:col-span-2">
               <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
               <textarea defaultValue={user.address} disabled required id="address" name="address" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your address here"></textarea>
            </div>

            <Logout />

         </div>
      </div>
   )
}

export default Profile