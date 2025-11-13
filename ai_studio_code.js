import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentDisplay from './components/ContentDisplay';
import { ViewType } from './types';
import { MagnifyingGlassIcon } from './constants/icons';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('recipes');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-slate-100 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="md:grid md:grid-cols-4 md:gap-8">
          <div className="md:col-span-1">
            <Sidebar activeView={activeView} setActiveView={setActiveView} />
          </div>
          <div className="md:col-span-3 mt-8 md:mt-0">
            <div className="mb-6">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-md border-0 bg-slate-800 py-2.5 pl-10 pr-3 text-white shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                  placeholder="Rechercher... (ex: 'vinaigre, eau' pour les ingrédients)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <ContentDisplay activeView={activeView} searchQuery={searchQuery} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;