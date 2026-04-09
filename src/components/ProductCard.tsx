import { Star, MapPin } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
    name: string;
    location: string;
    rating: number;
    distance: string;
    imageUrl: string;
}

export default function ProductCard({
    name,
    location,
    rating,
    distance,
    imageUrl,
}: ProductCardProps) {
    return (
        <div className="min-w-[280px] bg-[#1E1E1E] rounded-3xl overflow-hidden mb-4">
            <div className="relative h-44 w-full">
                <Image
                    src={imageUrl}
                    alt={name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-4 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-base truncate">{name}</h3>
                    <div className="flex items-center gap-1 text-[#FFC107]">
                        <Star size={14} fill="currentColor" />
                        <span className="text-white/90 text-xs font-medium">{rating}</span>
                    </div>
                </div>
                <div className="flex items-center justify-between text-white/50 text-xs">
                    <div className="flex items-center gap-1">
                        <MapPin size={12} />
                        <span>{location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-4 h-4 flex items-center justify-center border border-white/20 rounded-[4px]">
                            <div className="w-1.5 h-1.5 rounded-full border border-white/40" />
                        </div>
                        <span>{distance}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
