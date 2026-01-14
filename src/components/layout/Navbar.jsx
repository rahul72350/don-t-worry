
import { useState } from "react";

function Navbar(){

    let [open,setOpen] = useState(false);

    return(
    <header className="h-16">
        <div className="mx-auto max-w-300 px-4 h-full bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl relative z-20">
            <div className="flex items-center justify-between h-full">
                <div className="logo text-white text-xl">&lt;&lt; Don&apos;t worry</div>
                    <button className="border-2 rounded-full p-2 md:hidden" type="button" aria-label="Open menu" onClick={()=>setOpen(!open)}>
                        <svg width={32} height={24} viewBox="0 0 24 24">
                            <path d="M 0 6 L 24 6" stroke="white" strokeWidth={4} strokeLinecap="round"   className={`transform origin-center transform-fill transition-transform  ${open?'rotate-45':''}`}/>
                            <path d="M 0 12 L 24 12" stroke="white" strokeWidth={4} strokeLinecap="round" className={`transform origin-center transform-fill transition-transform ${open?'rotate-[-45deg]':''}`} />
                            <path d="M 0 18 L 24 18" stroke="white" strokeWidth={4} strokeLinecap="round" className={open?'opacity-0':'opacity-[1]'}opacity-0/>
                        </svg>
                    </button>

                      {/* navigation for desktop */}
                    <nav className="hidden md:block">
                        <ul className="flex border-2 justify-between w-lg p-2 rounded-2xl">
                             <li><a className="block text-white">Home</a></li>
                            <li><a className="block text-white">About</a></li>
                            <li><a className="block text-white">features</a></li>
                            <li><a className="block text-white">Contacts</a></li>
                        </ul>
                    </nav>
                    
                    <button className="hidden md:block border-2 p-1 w-20 h-10 rounded-2xl text-white">Login</button>

                </div>
            </div>

                {/* navigation for mobile */}
                    <nav className={`fixed top-0 left-0 w-full h-full bg-[rgb(0,0,0)] z-10 transition-transform duration-500  ${open?'translate-x-0':'translate-x-full'} flex justify-center items-start pt-31 px-8 pb-8`}>
                        <ul className="w-full h-125 flex flex-col justify-around items-center">
                            <li><a className="block text-2xl">Home</a></li>
                            <li><a className="block text-2xl">About</a></li>
                            <li><a className="block text-2xl">features</a></li>
                            <li><a className="block text-2xl">Contacts</a></li>
                            <li><a className="block text-xl text-red-600">Sign Out |→</a></li>
                        </ul>   
                    </nav>

              
            
        </header>
    )

}


export default Navbar;