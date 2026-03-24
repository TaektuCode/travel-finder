export default function Header() {
    return (
        <header className="bg-white border-b border-slate-200 py-4 px-8 flex justify-between items-center sticky top-0 z-10">
            <h1 className="text-2xl font-bold tracking-tight">
                🌍 Travel<span className="text-blue-600">-Finder</span>
            </h1>
            <button className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
                My Profile
            </button>
        </header>
    );
}