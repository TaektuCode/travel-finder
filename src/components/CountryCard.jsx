export default function CountryCard({ name, flag, budget, language, description }) {
    return (
        <article className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {flag}
            </div>
            <h3 className="text-xl font-bold mb-2 text-slate-900">{name}</h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                {description}
            </p>
            <div className="flex gap-2">
                <span className="bg-blue-50 text-blue-700 text-[10px] font-bold uppercase px-2 py-1 rounded-md">
                    Budget: {budget}
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase px-2 py-1 rounded-md">
                    {language}
                </span>
            </div>
        </article>
    );
}