import Navbar from "./ui/Navbar/navbar";
import Header from "./ui/header/header";
import DashboardItem from "./ui/dashboardItems/dashboardItem";

export default function Home() {

  return (
    <div className="flex flex-col select-none">
      <Navbar showMenu={true}/>

      <Header />

      <DashboardItem />

    </div>
  );
}
