import HeaderText from './HeaderText';
import Navbar from './Navbar';

const HeroSection = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <Navbar />
            <HeaderText />
        </header>
    );
};

export default HeroSection;