'use client';

import React, {useState} from "react";
import Link from "next/link";
import { FiShoppingCart , FiMenu, FiX  } from 'react-icons/fi';
import CartSideBar from "./portals/CartSideBar";
import { logout } from "@/app/actions/auth";
import LoginModal from "./portals/LoginModal";
import { CiUser } from "react-icons/ci";
import { AiOutlineLogout } from "react-icons/ai";


interface HeaderProps {
    brand?: React.ReactNode;
    brandLogoUrl?: string;
    navItems?: { label: string; href: string }[];
    showCart?: boolean;
    session?: object;
}

const Header = ({ 
    brand, 
    brandLogoUrl, 
    navItems, 
    showCart,
    session
   }: HeaderProps) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [mobileOpenMenu, setMobileOpenMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);

  return (
    <>
        <header className="bg-white/80 w-full border-b border-gray-200 backdrop-blur-sm sticky top-0 z-50">
            <div className="flex justify-between items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16">
                <Link href={brandLogoUrl} className="text-xl font-bold text-gray-900">{brand}</Link>
                <nav className="hidden sm:flex gap-6">
                    {navItems.map((item) => (
                        <Link 
                            key={item.href} 
                            href={item.href} 
                            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-6">
                    {showCart && (
                        <button className="cursor-pointer relative text-gray-600 transition-colors hover:text-gray-900" 
                                onClick={() => setCartOpen((prev) => !prev)}>
                        <FiShoppingCart className="w-6 h-6" />
                        <span className="absolute -top-3 -right-3 bg-black text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">3</span>
                        </button>
                    )}
                    { session ?
                            (<button onClick={() => logout()} title="Logout" className="cursor-pointer">
                               <AiOutlineLogout size={25} />
                            </button>) :
                            (<button
                                onClick={() => setShowLogin(true)}
                                title="login"
                                className="cursor-pointer"
                            >
                                <CiUser size={25} />
                            </button>)
                    }
                    {/* Mobile Menu burger */}
                    <button className="inline-block sm:hidden cursor-pointer text-gray-600 transition-colors hover:text-gray-900"
                            onClick={() => setMobileOpenMenu((prev) => !prev)}>
                    {mobileOpenMenu ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            { mobileOpenMenu && (
                <div className="sm:hidden bg-white border-t border-gray-200 py-4 px-6">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="text-sm font-medium text-gray-600">
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
        { cartOpen && (<CartSideBar isOpen={cartOpen} onClose={() => setCartOpen(false)} session={session} />) }
        <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  )
}

export default Header