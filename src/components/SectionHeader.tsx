import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface SectionHeaderProps {
    title: string;
    href?: string;
}

export default function SectionHeader({ title, href = "#" }: SectionHeaderProps) {
    return (
        <div className="flex items-center justify-between px-6 py-2">
            <h2 className="text-white text-lg font-semibold">{title}</h2>
            <Link
                href={href}
                className="flex items-center gap-1.5 bg-[#1E1E1E] text-white/80 py-1.5 px-3 rounded-full text-xs hover:bg-[#2A2A2A] transition-all"
            >
                See all <ArrowRight size={14} />
            </Link>
        </div>
    );
}
