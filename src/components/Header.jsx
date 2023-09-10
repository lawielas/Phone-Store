import { useEffect, useState } from "react"


export const Header = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [displayNavLinks, setDisplayNavLinks] = useState(false)

    const breakPoint = 770

    useEffect(() => {
        const handleResizeWindow = () => {
            window.addEventListener("resize", handleResizeWindow)
        }
        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [])

    const handleToggleNav = () => {
        setDisplayNavLinks(!displayNavLinks)
    }

    if (width > breakPoint) {
        return (
            <nav className="flex justify-center items-center py-3 text-white">
                <h1 className="text-4xl font-bold font-roboto ">RELAP</h1>
                <input type="text" placeholder="Search" className="w-64 p-2 mx-6" />
                <div className="text-lg mx-32">
                    <a href="#" className="mx-5">Home</a>
                    <a href="#" className="mx-5">Products</a>
                    <a href="#" className="mx-5">Store</a>
                    <a href="#" className="mx-5">Products</a>
                    <a href="#" className="mx-5">News</a>
                </div>
                <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </nav>
        )
    }
    
    return (
        <div className="py-5">
            <nav className="flex justify-around items-center py-3 text-white">
                <h1 className="text-2xl font-bold font-roboto ">RELAP</h1>
                <div className="flex">
                    <div className="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </div>
                    <div onClick={handleToggleNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </div>
                </div>
            </nav>
            <div className="text-center">
                <input type="text" placeholder="Search" className="w-72 p-2 mx-6 " />
            </div>
            
            {displayNavLinks && <div className="text-xl text-white flex flex-col gap-2 justify-center items-center py-3">
                <a href="#">Home</a>
                <a href="#">Products</a>
                <a href="#">Store</a>
                <a href="#">Products</a>
                <a href="#">News</a>
            </div>}
        </div>
        
    )
    
}