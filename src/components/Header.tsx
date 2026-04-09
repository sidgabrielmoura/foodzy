import { MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <div className="flex flex-col mb-4">
            <div className="relative h-40 w-full overflow-hidden bg-linear-to-br from-[#FF6B00] to-[#FFC107]">
                <Image
                    src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000"
                    alt="Establishment Banner"
                    fill
                    className="object-cover opacity-50 contrast-125"
                />
            </div>

            <div className="px-6 -mt-10 relative z-10 flex items-end gap-4">
                <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-4 border-[#121212] shadow-xl bg-[#1E1E1E]">
                    <Image
                        src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=200"
                        alt="Burger House Logo"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="pb-1">
                    <h1 className="text-white text-2xl font-bold">Burger House</h1>
                    <p className="text-[#FFC107] text-sm font-medium">Foodzy Member</p>
                </div>
            </div>
        </div>
    );
}
