import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="px-6 py-4">
            <div className="relative flex items-center">
                <Search className="absolute left-4 text-white/40" size={18} />
                <input
                    type="text"
                    placeholder="Pesquise aqui"
                    className="w-full bg-[#1E1E1E] text-white text-sm rounded-xl py-4 pl-12 pr-4 outline-none focus:ring-1 focus:ring-white/20 transition-all"
                />
            </div>
        </div>
    );
}
