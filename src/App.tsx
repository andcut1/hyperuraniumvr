import './App.css';
import Button from './components/button/button';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className='bg-purple-900 h-screen'>
      <Navbar />
      <div className='flex justify-center items-center h-full'>
        <div>
          <img src='https://overworld.qodeinteractive.com/wp-content/uploads/2020/01/Beat-the-game.png' />
          <img src='https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/main-home-rev-img-3.png' />
          <div className="flex justify-between items-center mt-4">
            <Button label='OUTLINED' outlined />
            <Button label='FILLED' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;