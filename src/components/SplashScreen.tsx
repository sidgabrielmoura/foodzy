"use client"
import { useCategoriesStore } from "@/store/categories";
import { useSnapshot } from "valtio";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
    const { isLoading } = useSnapshot(useCategoriesStore);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (!isLoading) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (!isVisible) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#121212] transition-opacity duration-700 ${!isLoading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
            <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
                <div className="grid grid-cols-4 gap-12 rotate-12 scale-150">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div key={i} className="text-white text-4xl">🍔</div>
                    ))}
                </div>
            </div>

            <div className="relative flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FF6B00] rounded-full blur-[80px] opacity-20 animate-pulse"></div>

                <div className="relative flex flex-col items-center">
                    <div className="relative w-48 h-48 mb-4">
                        <Image
                            src="/foodzy_splash.png"
                            alt="Foodzy Logo"
                            className="object-contain"
                            priority
                            fill
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
