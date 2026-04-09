"use client"
import { UtensilsCrossed, Wheat, Drumstick, Pizza, Coffee, Dessert } from "lucide-react";
import { useCategoriesStore } from "@/store/categories";
import { useSnapshot } from "valtio";
import { useEffect } from "react";

const iconMap: Record<string, any> = {
    "Burgers": UtensilsCrossed,
    "Rice": Wheat,
    "Swallow": Drumstick,
    "Snacks": Pizza,
    "Acompanhamentos": Pizza,
    "Bebidas": Coffee,
    "Sobremesas": Dessert,
};

export default function CategoryList() {
    const { categories } = useSnapshot(useCategoriesStore);

    return (
        <div className="flex gap-2 px-6 py-1 overflow-x-auto no-scrollbar lg:justify-center">
            <div className="flex flex-col items-center justify-center min-w-[100px] h-[90px] w-full rounded-2xl gap-3 transition-all cursor-pointer bg-white text-black">
                <div>
                    <UtensilsCrossed size={24} />
                </div>
                <span className="text-xs font-medium">Tudo</span>
            </div>

            {categories.length > 0 && categories.map((cat) => {
                const Icon = iconMap[cat.name] || UtensilsCrossed;
                return (
                    <div
                        key={cat.id}
                        className="flex flex-col truncate items-center justify-center min-w-[130px] h-[90px] w-full rounded-2xl gap-3 transition-all cursor-pointer bg-[#1E1E1E] text-white/60 hover:bg-[#2A2A2A]"
                    >
                        <div className="text-white">
                            <Icon size={24} />
                        </div>
                        <span className="text-xs font-medium">{cat.name}</span>
                    </div>
                );
            })}
        </div>
    );
}
