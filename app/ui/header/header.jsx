import Image from "next/image"
import DashboardActionMain from "./DashboardActionMain"

const Header = () => {
  return (
    // <div className="  py-10 px-4 md:px-14 lg:px-32 flex flex-col justify-between md:flex-row bg-gradient-to-r from-slate-200 to-gray-200">
    <div className="bg-[url('/header-bg-m.jpg')] md:bg-[url('/header-bg.jpg')] bg-no-repeat bg-center bg-cover pt-10 pb-[34rem] md:py-10 px-4 md:px-14 lg:px-32 flex flex-col justify-between md:flex-row text-white">
      <div className="px-3 py-10 md:py-20 md:pl-7 lg:pl-14 lg:pr-60 w-full md:w-3/6 lg:w-4/6">
        <h1 className="text-3xl md:text-4xl	font-bold	">The Most <span className="text-yellow-600	">Secure Currency</span></h1>
        <h1 className="text-3xl md:text-4xl	font-bold	mt-2"><span className="text-yellow-600	"> Exchanger</span></h1>
        <p className="my-5 md:my-10 text-sm md:text-base">Algorithmic trading, also known as automated trading, black-box trading, or algo-trading, involves placing trades using a computer program that follows a predetermined set of rules. These programs are designed to execute trades at a speed and frequency that surpass the abilities of human traders, theoretically generating profits more efficiently.
        </p>

        <p className="my-5 md:my-10 text-sm md:text-base"> This type of trading is widely used by institutional investors, hedge funds, and investment banks to manage large orders and reduce market impact. It also allows for backtesting strategies on historical data to optimize performance. Algorithmic trading has revolutionized the financial markets by increasing trading efficiency, liquidity, and transparency. However, it also poses risks, such as system failures and market manipulation, which require robust risk management strategies.</p>

        <DashboardActionMain />

      </div>

      {/* <div className="relative w-full md:w-3/6 lg:w-2/6 p-10 my-5 h-60 md:h-auto md:my-5 lg:my-10">
        <Image
          className="md:p-14"
          src="/trade.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div> */}
    </div>
  )
}

export default Header