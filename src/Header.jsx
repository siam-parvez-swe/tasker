import TASKERlogo from './assets/taskerlogo.png'

const Header = () => {
    return (
        <nav className="py-6 md:py-8 fixed top-0 w-full bg-[#191D26] z-50">
            <div className="container mx-auto flex items-center justify-between gap-x-6">
                <a href="/" className="flex items-center gap-x-2">
                    <img
                        className="h-10 w-auto "
                        src={TASKERlogo}
                        alt="Lws"
                    />
                    <p className="text-white text-xl font-bold">TASKER</p>
                </a>
                
            </div>
        </nav>
    );
};

export default Header;