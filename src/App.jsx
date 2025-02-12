import  { useContext, useEffect } from 'react';
import { ThemeContext } from './Components/ThemeContext';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import TopRatedRooms from './Components/Rooms/TopRatedRooms';
import Reactmaps from './Components/Reactmaps';
import Companies from './Companies';
import Students from './Consumers';
import Footer from './Components/Footer';
import img1 from './assets/1.png'
import img2 from './assets/21.png'
const App = () => {
  const { theme } = useContext(ThemeContext);
  const getBackgroundImage = () => {
      return theme === 'light' ? img2 : img1;
  };
  useEffect(() => {
      document.body.classList.add('bg-fixed'); // Add bg-fixed class to body
      document.body.classList.toggle('dark', theme === 'dark'); // Toggle the dark class
      return () => {
          document.body.classList.remove('bg-fixed'); // Remove on unmount (important!)
      };
  });

    return (
        <div className={`-mt-20 pt-20 ${theme === 'dark' ? 'dark' : ''} min-h-screen`}
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.3s ease'
        }}> 
             <Navbar />
                <Banner /> 
                
                <TopRatedRooms />
                <Reactmaps />
                <Companies />
                <Students />
                <Footer />
        </div>
    );
};

export default App;