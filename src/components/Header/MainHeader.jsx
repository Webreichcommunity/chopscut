import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLocationOn, MdMenu, MdShoppingCart, MdAccessTime } from "react-icons/md";
import { useCart } from "../context/CartContext";

const MainHeader = ({ onMenuToggle }) => {
    const { cartItems } = useCart();
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        const options = { weekday: "short", month: "short", day: "numeric" };
        return date.toLocaleDateString("en-US", options).toUpperCase();
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    return (
        <header className="fixed top-0 left-0 right-0 bg-white text-gray-900 p-4 z-50 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <img
                            src="/chofcutlogo.jpg"
                            alt="Meat Shop Logo"
                            className="h-10 w-40 object-contain"
                        />
                    </Link>
                </div>

                {/* Right Section: Menu and Cart */}
                <div className="flex items-center space-x-4">
                    {/* Menu Button */}
                    <Link to="/">
                        <button
                            onClick={onMenuToggle}
                            className="p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                            aria-label="Menu"
                        >
                            <MdMenu className="h-6 w-6 text-gray-900" />
                        </button>
                    </Link>

                    {/* Cart Button */}
                    <Link
                        to="/cart"
                        className="relative p-2 rounded-full hover:bg-gray-100 transition-all duration-300"
                        aria-label="Cart"
                    >
                        <MdShoppingCart className="h-6 w-6 text-gray-900" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default MainHeader;