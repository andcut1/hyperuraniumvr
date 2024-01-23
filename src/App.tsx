import './App.css';
import CardSection from './components/card-section/card-section';
import ContactUs from './components/contact-us/contact-us';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import InfiniteSlider from './components/infinite-slider/infinite-slider';
import Navbar from './components/navbar/navbar';
import Newsletter from './components/newsletter/newsletter';
import VideoSection from './components/video-section/video-section';

function App() {
  return (
    <>
      <div className="bg-cover bg-[url('https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/main-home-bckgd-img.jpg')]">
        <div className="sm:h-screen">
          <Navbar />
          <Home />
        </div>
        <VideoSection />
        <CardSection />
        <ContactUs />
        <InfiniteSlider />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;