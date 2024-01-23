import Button from '../../components/button/button';
import { Fade, Flip } from "react-awesome-reveal";

function Home() {
    return (
        <div className='container mx-auto w-5/6 flex justify-center items-center h-[60vh] sm:h-[85vh]'>
            <div className='flex flex-col items-center sm:items-stretch sm:flex-none'>
                <Fade triggerOnce>
                    <img src='https://hyperuraniumvr.com/images/logo.png' className='max-w-72 sm:max-w-lg' />
                </Fade>
                <div className="flex flex-col mt-4 sm:flex-row sm:justify-between sm:items-center">
                    <Flip direction='horizontal' triggerOnce delay={500} >
                        <Button label='outlined' className='mb-5 sm:m-0' outlined />
                    </Flip>
                    <Flip direction='horizontal' triggerOnce >
                        <Button label='filled' />
                    </Flip>
                </div>
            </div>
        </div>)
}

export default Home