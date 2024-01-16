import './App.css';
import Button from './components/button/button';
import Navbar from './components/navbar/navbar';
import { Flip } from "react-awesome-reveal";

function App() {
  return (
    <>
      <div className="bg-cover bg-[url('https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/main-home-bckgd-img.jpg')] h-screen">
        <Navbar />
        <div className='flex justify-center items-center h-[85vh]'>
          <div className='flex flex-col items-center sm:items-stretch sm:flex-none'>
            <img src='https://hyperuraniumvr.com/images/logo.png' className='max-w-80 sm:max-w-lg' />
            <div className="flex flex-col mt-4 sm:flex-row sm:justify-between sm:items-center">
              <Flip direction='horizontal' delay={500} >
                <Button label='OUTLINED' className='mb-5 sm:m-0' outlined />
              </Flip>
              <Flip direction='horizontal'  >
                <Button label='FILLED' />
              </Flip>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;