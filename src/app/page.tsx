import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import CategoryList from "@/components/CategoryList";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";

const TOP_RATED = [
  {
    name: "Sebotimo Jollof Joint",
    location: "Idi-oro, Mushin",
    rating: 4.2,
    distance: "15 km away",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "BamBar",
    location: "Idi-oro, Mushin",
    rating: 4.5,
    distance: "12 km away",
    imageUrl: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=1000",
  },
];

const SUGGESTED = [
  {
    name: "Spicy Village",
    location: "Mushin, Lagos",
    rating: 4.8,
    distance: "2 km away",
    imageUrl: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Mama Cass",
    location: "Surulere, Lagos",
    rating: 4.3,
    distance: "5 km away",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function Home() {
  return (
    <main className="flex-1 overflow-y-auto pb-8 bg-[#121212]">
      <div className="w-full mx-auto">

        <Header />
        <SearchBar />

        <CategoryList />

        <section className="mt-4">
          <SectionHeader title="Top rated bukas" />
          <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar py-2">
            {TOP_RATED.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-6">
          <SectionHeader title="Suggested bukas" />
          <div className="flex gap-4 px-6 overflow-x-auto no-scrollbar py-2">
            {SUGGESTED.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
