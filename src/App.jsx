import { useState } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CountryCard from './components/CountryCard';
import countries from './destinations.json';

function App() {
  // Initialize state for budget (single string) and languages (array for multi-select)
  const [activeBudget, setActiveBudget] = useState('All');
  const [activeLanguages, setActiveLanguages] = useState([]);

  // Debugging re-renders and current state
  console.log("App rendered! Current budget filter:", activeBudget);

  // Derive filtered list based on active budget and language selection
  const filteredCountries = countries.filter((country) => {
    // Check if budget matches or if "All" is selected
    const budgetMatch = activeBudget === 'All' || country.budget === activeBudget;

    // Check if language matches any in the selection array, or allow all if array is empty
    const languageMatch = activeLanguages.length === 0 || activeLanguages.includes(country.language);

    return budgetMatch && languageMatch;
  });

  /**
   * Toggles a language in the activeLanguages array.
   * If it exists, remove it via filter. If not, add it via spread operator.
   */
  const toggleLanguage = (lang) => {
    setActiveLanguages((prev) =>
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-8">
        {/* Pass down state and handler functions as props for lifting state up */}
        <FilterBar
          activeBudget={activeBudget}
          onBudgetChange={setActiveBudget}
          activeLanguages={activeLanguages}
          onLanguageToggle={toggleLanguage}
          onReset={() => { setActiveBudget('All'); setActiveLanguages([]); }}
        />

        <section className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map over the derived "filteredCountries" array instead of the raw data */}
            {filteredCountries.map((country) => (
              <CountryCard key={country.id} {...country} />
            ))}
          </div>

          {/* Fallback UI if no results match the current filter combination */}
          {filteredCountries.length === 0 && (
            <p className="text-center py-10 text-slate-500 font-medium">
              No destinations match your filters. 🏝️
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;