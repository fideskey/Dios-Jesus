import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import VideoGrid from '../components/VideoGrid';
import Footer from '../components/Footer';
import { categories } from '../data/categories';
import { videos } from '../data/videos';
import { colors } from '../utils/colors';
import '../App.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [language, setLanguage] = useState('es');

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app">
      <Header 
        onSearch={setSearchTerm}
        language={language}
        onLanguageChange={setLanguage}
      />
      <div className="main-container">
        <Sidebar 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <VideoGrid videos={filteredVideos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
