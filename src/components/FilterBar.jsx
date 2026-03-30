export default function FilterBar({ activeBudget, onBudgetChange, activeLanguages, onLanguageToggle, onReset }) {
    return (
        <aside className="md:w-1/4 mb-8 md:mb-0">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 sticky top-24">
                <h2 className="text-lg font-semibold mb-6 text-slate-800">Filters</h2>

                {/* Budget Section */}
                <div className="mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Budget</p>
                    <div className="flex flex-wrap gap-2">
                        {['All', 'Low', 'Medium', 'High'].map((level) => (
                            <button
                                key={level}
                                onClick={() => onBudgetChange(level)}
                                className={`px-4 py-2 rounded-xl border text-sm transition-all cursor-pointer font-medium ${activeBudget === level
                                        ? 'border-blue-600 bg-blue-50 text-blue-600'
                                        : 'border-slate-200 bg-white hover:border-blue-500'
                                    }`}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Language Section */}
                <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Language</p>
                    <div className="flex flex-col gap-3">
                        {['English', 'Spanish', 'Portuguese', 'Thai', 'Vietnamese'].map((lang) => (
                            <label
                                key={lang}
                                className="flex items-center gap-3 text-sm cursor-pointer hover:text-blue-600 transition-colors text-slate-600"
                            >
                                <input
                                    type="checkbox"
                                    checked={activeLanguages.includes(lang)}
                                    onChange={() => onLanguageToggle(lang)}
                                    className="w-4 h-4 rounded-md border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                                />
                                {lang}
                            </label>
                        ))}
                    </div>
                </div>

                <button
                    onClick={onReset}
                    className="mt-8 w-full py-2 text-sm text-slate-400 hover:text-red-500 transition-colors underline decoration-dotted cursor-pointer"
                >
                    Clear all filters
                </button>
            </div>
        </aside>
    );
}