import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CountryCard from './components/CountryCard';
import countries from './destinations.json';
function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-8 md:flex gap-8">
        <FilterBar />

        <section className="md:w-3/4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {countries.map(({ id, name, flag, budget, language, description }) => (
              <CountryCard
                key={id}
                name={name}
                flag={flag}
                budget={budget}
                language={language}
                description={description}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;