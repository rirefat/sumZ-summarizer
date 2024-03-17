import { logo } from '../assets';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center w-full mb-10 pt-3">
            <img
                src={logo}
                alt="sumZ logo"
                className='w-28 object-contain'
            />

            <button
                type='button'
                onClick={() => window.open('https://github.com/rirefat/sumZ-summarizer')}
                className='black_btn shadow-xl'
            >Github</button>
        </nav>
    );
};

export default Navbar;