import { Helmet } from "react-helmet"
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import Reactmaps from "./Components/Reactmaps"
import TopRatedRooms from "./Components/Rooms/TopRatedRooms"
import Footer from "./Components/Footer"
import Companies from "./Companies"
import Students from "./Consumers"
import { useContext } from "react"
import { AuthC } from "./Provider/AuthProviderx"
import Loading from "./Components/Loading"


function App() {
  const {loading} = useContext(AuthC);
  if (loading) {
      return <Loading></Loading>
  }
  return (
    <>
    <Helmet>
                <title>Home Page</title>
      </Helmet>
      <Navbar></Navbar>
      <Banner/>
      <TopRatedRooms/>
      <Reactmaps/>
      <Companies/>
      <Students/>
      <Footer/>
    </>
  )
}

export default App
