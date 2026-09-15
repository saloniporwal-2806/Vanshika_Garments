import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, ArrowUpDown, X, Sparkles, AlertCircle } from 'lucide-react';
import { products } from '../data/products';
import { quickCategories } from '../data/categories';
import ProductCard from './ProductCard';

export default function ProductCatalogue({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onQuickView,
  searchInputRef
}) {
  const [selectedGroup, setSelectedGroup] = useState('all'); // 'all', 'women', 'men'
  const [sortBy, setSortBy] = useState('featured'); // 'featured', 'price-low', 'price-high', 'rating'
  const [priceFilter, setPriceFilter] = useState('all'); // 'all', 'under-1000', '1000-2000', 'above-2000'

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      // 1. Search query match
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesCode = item.code.toLowerCase().includes(q);
        const matchesFabric = item.fabric.toLowerCase().includes(q);
        const matchesOccasion = item.occasion.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        if (!matchesName && !matchesCode && !matchesFabric && !matchesOccasion && !matchesCategory) {
          return false;
        }
      }

      // 2. Gender Group Filter
      if (selectedGroup !== 'all' && item.group !== selectedGroup) {
        return false;
      }

      // 3. Category Filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'women' && item.group !== 'women') return false;
        if (selectedCategory === 'men' && item.group !== 'men') return false;
        if (selectedCategory !== 'women' && selectedCategory !== 'men' && item.category !== selectedCategory) {
          return false;
        }
      }

      // 4. Price range filter
      if (priceFilter === 'under-1000' && item.price >= 1000) return false;
      if (priceFilter === '1000-2000' && (item.price < 1000 || item.price > 2000)) return false;
      if (priceFilter === 'above-2000' && item.price <= 2000) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default: featured/bestseller first
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  }, [searchQuery, selectedGroup, selectedCategory, priceFilter, sortBy]);

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedGroup('all');
    setPriceFilter('all');
    setSortBy('featured');
  };

  return (
    <section id="catalogue" className="py-16 bg-cream-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
            <span>Handpicked Fashion</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy-950">
            Explore Vanshika Garments Catalogue
          </h2>
          <p className="mt-2 text-charcoal-muted text-sm sm:text-base">
            Browse through our wide spectrum of elegant ethnic wear, smart casuals, and party attire with instant WhatsApp inquiry.
          </p>
        </div>

        {/* Search Bar & Primary Division Pills */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-beige-300 shadow-card mb-8 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Live Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-charcoal-muted" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search kurtis, shirts, linen, silk, kurta sets, code..."
                className="w-full pl-10 pr-10 py-3 rounded-xl bg-cream-100 border border-beige-300 focus:border-burgundy-600 focus:ring-2 focus:ring-burgundy-100 text-charcoal text-sm outline-none transition-all placeholder:text-charcoal-muted/70"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-charcoal-muted hover:text-charcoal rounded-full"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Main Category Tabs: All, Women & Girls, Men & Boys */}
            <div className="md:col-span-6 flex flex-wrap sm:flex-nowrap gap-2 justify-start md:justify-end">
              <button
                type="button"
                onClick={() => { setSelectedGroup('all'); setSelectedCategory('all'); }}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedGroup === 'all' && selectedCategory === 'all'
                    ? 'bg-burgundy-600 text-white shadow-sm'
                    : 'bg-cream-100 hover:bg-cream-300 text-charcoal border border-beige-300'
                }`}
              >
                All Apparel
              </button>

              <button
                type="button"
                onClick={() => { setSelectedGroup('women'); setSelectedCategory('women'); }}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedGroup === 'women' || selectedCategory === 'women'
                    ? 'bg-burgundy-600 text-white shadow-sm'
                    : 'bg-cream-100 hover:bg-cream-300 text-charcoal border border-beige-300'
                }`}
              >
                Women & Girls
              </button>

              <button
                type="button"
                onClick={() => { setSelectedGroup('men'); setSelectedCategory('men'); }}
                className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedGroup === 'men' || selectedCategory === 'men'
                    ? 'bg-burgundy-600 text-white shadow-sm'
                    : 'bg-cream-100 hover:bg-cream-300 text-charcoal border border-beige-300'
                }`}
              >
                Men & Boys
              </button>
            </div>

          </div>

          {/* Quick Sub-Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 pt-2 border-t border-beige-200">
            {quickCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(item.id);
                  if (item.group === 'women-girls') setSelectedGroup('women');
                  else if (item.group === 'men-boys') setSelectedGroup('men');
                  else setSelectedGroup('all');
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium shrink-0 transition-all ${
                  selectedCategory === item.id
                    ? 'bg-burgundy-900 text-white shadow-sm'
                    : 'bg-cream-100 text-charcoal hover:bg-beige-200 border border-beige-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Controls Bar: Price Range, Sorting & Active Filters Count */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-beige-200 text-xs sm:text-sm">
            
            <div className="flex items-center gap-3">
              <span className="font-semibold text-charcoal flex items-center gap-1">
                <SlidersHorizontal className="w-4 h-4 text-burgundy-700" />
                <span>Budget:</span>
              </span>
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className="bg-cream-100 border border-beige-300 text-charcoal rounded-lg px-2.5 py-1.5 text-xs outline-none focus:border-burgundy-600"
              >
                <option value="all">Any Price</option>
                <option value="under-1000">Under ₹1,000</option>
                <option value="1000-2000">₹1,000 - ₹2,000</option>
                <option value="above-2000">Above ₹2,000</option>
              </select>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-semibold text-charcoal flex items-center gap-1">
                <ArrowUpDown className="w-4 h-4 text-burgundy-700" />
                <span>Sort By:</span>
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-cream-100 border border-beige-300 text-charcoal rounded-lg px-2.5 py-1.5 text-xs outline-none focus:border-burgundy-600"
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            <div className="text-xs text-charcoal-muted">
              Showing <span className="font-bold text-burgundy-900">{filteredProducts.length}</span> items
            </div>

          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-beige-300 p-12 text-center max-w-lg mx-auto shadow-sm space-y-4">
            <AlertCircle className="w-12 h-12 text-burgundy-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-charcoal">No Matching Outfits Found</h3>
            <p className="text-sm text-charcoal-muted">
              We couldn't find items matching your current search or filter criteria. Try resetting filters or searching for terms like "kurta", "shirt", or "cotton".
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="px-6 py-2.5 rounded-xl bg-burgundy-600 text-white font-semibold text-xs shadow hover:bg-burgundy-700 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
