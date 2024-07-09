import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";



const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact Us" },
        { id: 5, path: "/faq", name: "FAQ" }
    ];



    return (
        <nav className="text-black bg-sky-200 p-5">
            <div className="md:hidden text-2xl" onClick={() => { setOpen(!open) }}>
                {
                    open == true ? <IoCloseSharp /> : <IoMdMenu />

                }


            </div>


            <ul className={`md:flex absolute duration-1000 md:static ${open ? 'top-12' : '-top-60'} bg-sky-200 px-10`}>

                {
                    routes.map(route =>
                        <Link key={route.id} route={route}></Link>

                    )
                }


            </ul>

        </nav>
    );
};

export default NavBar;