import  { useContext, useEffect } from 'react';
import { ThemeContext } from './Components/ThemeContext';
import Navbar from './Components/Navbar';
import Banner from './Components/Banner';
import TopRatedRooms from './Components/Rooms/TopRatedRooms';
import Reactmaps from './Components/Reactmaps';
import Companies from './Companies';
import Students from './Consumers';
import Footer from './Components/Footer';

const App = () => {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
      document.body.classList.add('bg-fixed'); // Add bg-fixed class to body
      document.body.classList.toggle('dark', theme === 'dark'); // Toggle the dark class
      return () => {
          document.body.classList.remove('bg-fixed'); // Remove on unmount (important!)
      };
  }, []); // Empty dependency array ensures this runs only once on mount/unmount

  useEffect(() => {
      const body = document.body;
      if (theme === 'light') {
          body.style.backgroundImage = 'url(./src/assets/2.png)';
      } else if (theme === 'dark') {
          body.style.backgroundImage = 'url(./src/assets/1.png)';
      }
  }, [theme]); // Run when theme changes

    return (
        <div className="min-h-screen"> 
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