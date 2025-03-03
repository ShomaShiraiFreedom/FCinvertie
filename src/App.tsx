import { Calendar, ChevronRight, Home, Instagram, Menu, Newspaper, X } from 'lucide-react';
import { useState } from 'react';
import MatchSchedule from './components/MatchSchedule';
import NewsSection from './components/NewsSection';
import TeamInfo from './components/TeamInfo';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigateTo = (tab: string) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              <span className="text-red-500">FC</span>invertie
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => navigateTo('home')}
              className={`flex items-center space-x-1 ${activeTab === 'home' ? 'text-red-500' : 'hover:text-red-400'}`}
            >
              <Home size={18} />
              <span>ホーム</span>
            </button>
            <button
              onClick={() => navigateTo('matches')}
              className={`flex items-center space-x-1 ${activeTab === 'matches' ? 'text-red-500' : 'hover:text-red-400'}`}
            >
              <Calendar size={18} />
              <span>試合情報</span>
            </button>
            <button
              onClick={() => navigateTo('news')}
              className={`flex items-center space-x-1 ${activeTab === 'news' ? 'text-red-500' : 'hover:text-red-400'}`}
            >
              <Newspaper size={18} />
              <span>ニュース</span>
            </button>
            <a
              href="https://www.instagram.com/invertir.fc?igsh=cjNsNHd5b2s3dG5x"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 hover:text-red-400"
            >
              <Instagram size={18} />
              <span>Instagram</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <button
              onClick={() => navigateTo('home')}
              className="py-3 border-b border-gray-700 flex justify-between items-center"
            >
              <div className="flex items-center space-x-2">
                <Home size={18} />
                <span>ホーム</span>
              </div>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => navigateTo('matches')}
              className="py-3 border-b border-gray-700 flex justify-between items-center"
            >
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>試合情報</span>
              </div>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => navigateTo('news')}
              className="py-3 border-b border-gray-700 flex justify-between items-center"
            >
              <div className="flex items-center space-x-2">
                <Newspaper size={18} />
                <span>ニュース</span>
              </div>
              <ChevronRight size={16} />
            </button>
            <a
              href="https://www.instagram.com/invertir.fc?igsh=cjNsNHd5b2s3dG5x"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 flex justify-between items-center"
            >
              <div className="flex items-center space-x-2">
                <Instagram size={18} />
                <span>Instagram</span>
              </div>
              <ChevronRight size={16} />
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeTab === 'home' && (
          <div className="space-y-8">
            <div className="relative h-60 md:h-80 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/member.JPEG"
                alt="Soccer field"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent flex items-center">
                <div className="px-6 py-4 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    <span className="text-red-500">FC</span>invertie
                  </h2>
                  <p className="text-lg md:text-xl">千葉県3部リーグ・八千代市リーグ所属</p>
                </div>
              </div>
            </div>

            <TeamInfo />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="text-red-500 mr-2" size={20} />
                  <h2 className="text-xl font-bold">直近の試合</h2>
                </div>
                <MatchSchedule limit={3} />
                <button
                  onClick={() => navigateTo('matches')}
                  className="mt-4 text-red-500 hover:text-red-700 flex items-center"
                >
                  <span>すべての試合を見る</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <Newspaper className="text-red-500 mr-2" size={20} />
                  <h2 className="text-xl font-bold">最新ニュース</h2>
                </div>
                <NewsSection limit={3} />
                <button
                  onClick={() => navigateTo('news')}
                  className="mt-4 text-red-500 hover:text-red-700 flex items-center"
                >
                  <span>すべてのニュースを見る</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center mb-4">
                <Instagram className="text-red-500 mr-2" size={20} />
                <h2 className="text-xl font-bold">Instagram</h2>
              </div>
              <p className="mb-4">チームの最新情報はInstagramでチェック！</p>
              <a
                href="https://www.instagram.com/invertir.fc?igsh=cjNsNHd5b2s3dG5x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center"
              >
                <Instagram size={18} className="mr-2" />
                <span>公式Instagramをフォロー</span>
              </a>
            </div>
          </div>
        )}

        {activeTab === 'matches' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Calendar className="text-red-500 mr-2" size={24} />
              <span>試合情報</span>
            </h2>
            <MatchSchedule />
          </div>
        )}

        {activeTab === 'news' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Newspaper className="text-red-500 mr-2" size={24} />
              <span>ニュース</span>
            </h2>
            <NewsSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">
                <span className="text-red-500">FC</span>invertie
              </h2>
              <p className="text-sm text-gray-400">千葉県3部リーグ・八千代市リーグ所属</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/invertir.fc?igsh=cjNsNHd5b2s3dG5x"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-400"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FCinvertie. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;