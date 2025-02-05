import { Helmet } from "react-helmet"
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Reactmaps from "./Components/Reactmaps"
import TopRatedRooms from "./Components/Rooms/TopRatedRooms"
import Footer from "./Components/Footer"
import ReviewForm from "./Components/ReviewSystem/ReviewForm"


function App() {

  return (
    <>
    <Helmet>
                <title>Home Page</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner/>
      <TopRatedRooms/>
      <Reactmaps/>
      <ReviewForm/>
      <Footer/>
    </>
  )
}

export default App
