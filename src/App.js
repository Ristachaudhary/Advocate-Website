import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';
import RecentPost from './Components/RecentPost';
import GetInTouch from './Components/GetInTouch';
import MainSlider from './Components/MainSlider';


function App() {

  return (
    <div className="App">
     <Header/>
     <MainSlider/>
     
     <GetInTouch/>
     <RecentPost/>

     <Footer/>
     <Copyright/>
    </div>
  );
}

export default App;
