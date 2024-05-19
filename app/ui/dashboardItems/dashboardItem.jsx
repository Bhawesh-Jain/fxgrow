import AboutUs from "../About/aboutus"
import Service from "../Service/service"
import Slider from "../Slider/slider"
import ContactUs from "../contact/contactus"
import Footer from "../footer/footer"

const DashboardItem = ({slider}) => {
  return (
    <>
      {slider && <Slider />}

      <AboutUs />

      <Service />

      <ContactUs />

      <Footer />
    </>
  )
}

export default DashboardItem