import './App.css';
import Button from './components/button/button';
import Navbar from './components/navbar/navbar';
import { Flip } from "react-awesome-reveal";

function App() {
  return (
    <div className='bg-purple-900 h-screen'>
      <Navbar />
      <div className='flex justify-center items-center h-full'>
        <div>
          <Flip direction='horizontal'>
            <img src='https://hyperuraniumvr.com/images/logo.png' className='w-[500px] z-0' />
          </Flip>
          <div className="flex justify-between items-center mt-4">
            <Flip direction='horizontal' delay={500} >
              <Button label='OUTLINED' outlined />
            </Flip>
            <Flip direction='horizontal'  >
              <Button label='FILLED' />
            </Flip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;