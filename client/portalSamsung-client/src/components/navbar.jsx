import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div>
                {/* component */}
                <nav className=" bg-white w-full flex relative justify-between items-center mx-auto px-8 h-20">
                    {/* logo */}
                    <div className="p-4">
                        <img
                            src="https://cdn.iconscout.com/icon/free/png-256/free-samsung-226432.png?f=webp&w=256"
                            height={"100px"}
                            width={"100px"}
                        />
                    </div>
                    {/* end logo */}
                    {/* Logout button*/}
                    <div>
                        <button
                            className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                        >
                            <Link to={`/login`}>Log In</Link>
                        </button>
                    </div>
                    {/* end Logout button*/}
                </nav>
            </div>
        </>
    )
}

export default Navbar
