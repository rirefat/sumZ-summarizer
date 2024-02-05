import { logo } from '../../assets';

const HeroSection = () => {
    return (
        <header className='w-full flex justify-center items-center flex-col'>
            <nav className="flex justify-between items-center w-full mb-10 pt-3">
                <img
                    src={logo}
                    alt="sumZ logo"
                    className='w-28 object-contain'
                />

                <button
                    type='button'
                    onClick={() => window.open('https://github.com/rirefat')}
                    className='black_btn'
                >Github</button>
            </nav>
        </header>
    );
};

export default HeroSection;