import React from 'react';
import './CategorySlider.css';
import { menuCategories } from '../../data/menudata';

export default function CategorySlider({ 
  selectedCategory, 
  setSelectedCategory, 
  selectedSubCategory, 
  setSelectedSubCategory 
}) {
  const activeCat = menuCategories.find(c => c.id === selectedCategory);

  return (
    <div className="sliderContainer">
      <div className="mainCats">
        {menuCategories.map(cat => (
          <button 
            key={cat.id} 
            onClick={() => setSelectedCategory(cat.id)}
            className={`catBtn ${selectedCategory === cat.id ? 'activeCat' : ''}`}
          >
            {cat.am}
          </button>
        ))}
      </div>

      <div className="subCatSlider">
        <button 
          className={`subCatBtn ${selectedSubCategory === 'ALL' ? 'activeSubCat' : ''}`}
          onClick={() => setSelectedSubCategory('ALL')}
        >
          Բոլորը
        </button>
        {activeCat?.subCategories?.map(sub => (
          <button
            key={sub}
            onClick={() => setSelectedSubCategory(sub)}
            className={`subCatBtn ${selectedSubCategory === sub ? 'activeSubCat' : ''}`}
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  );
}