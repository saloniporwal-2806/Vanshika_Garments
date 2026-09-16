import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { categoryGroups } from '../data/categories';

export default function CategoriesSection({ onSelectCategory }) {
  return (
    <section id="categories" className="py-12 sm:py-16 bg-cream-100 border-y border-beige-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-burgundy-100 text-burgundy-800 text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-dark shrink-0" />
            <span>Curated Collections</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-burgundy-950">
            Designed for Every Family Occasion
          </h2>
          <p className="mt-2 text-charcoal-muted text-xs sm:text-base leading-relaxed">
            Discover dedicated styles crafted with comfort, premium tailoring, and rich colors for 
            <strong> Girls & Women</strong> and <strong> Boys & Men</strong>.
          </p>
        </div>

        {/* Category Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          
          {categoryGroups.map((group) => {
            const isWomen = group.id === 'women-girls';
            const anchorId = isWomen ? 'women-girls' : 'men-boys';

            return (
              <div
                key={group.id}
                id={anchorId}
                className="bg-white rounded-2xl overflow-hidden border border-beige-300 shadow-card hover:shadow-luxury transition-all duration-300 flex flex-col"
              >
                {/* Hero Banner for Category Group */}
                <div className="relative h-56 sm:h-72 overflow-hidden group">
                  <img
                    src={group.image}
                    alt={group.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 text-white">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-gold-light">
                      {isWomen ? 'Ladies & Little Princesses' : 'Gentlemen & Young Princes'}
                    </span>
                    <h3 className="font-serif text-xl sm:text-3xl font-bold mt-0.5 sm:mt-1 text-cream-50">
                      {group.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-cream-200 mt-0.5 line-clamp-1">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                {/* Categories List */}
                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {group.categories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => onSelectCategory(cat.id)}
                        className="group/item flex items-center justify-between p-3 rounded-xl border border-beige-300 hover:border-burgundy-500 hover:bg-burgundy-50/60 transition-all text-left"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs sm:text-sm font-semibold text-charcoal group-hover/item:text-burgundy-700 transition-colors truncate">
                              {cat.name}
                            </span>
                          </div>
                          <span className="text-[10px] sm:text-[11px] text-charcoal-muted block mt-0.5">
                            {cat.count}
                          </span>
                        </div>
                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className={`text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full font-medium ${
                            cat.badge === 'Hot Seller' || cat.badge === 'Festive Pick'
                              ? 'bg-burgundy-100 text-burgundy-700'
                              : 'bg-gold-light/40 text-charcoal'
                          }`}>
                            {cat.badge}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-charcoal-muted group-hover/item:text-burgundy-700 group-hover/item:translate-x-0.5 transition-all" />
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Group CTA */}
                  <div className="pt-3 border-t border-beige-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <span className="text-xs text-charcoal-muted">
                      Ready to browse all {isWomen ? 'Girls & Women' : 'Boys & Men'} styles?
                    </span>
                    <button
                      type="button"
                      onClick={() => onSelectCategory(isWomen ? 'women' : 'men')}
                      className="inline-flex items-center gap-1 text-xs font-bold text-burgundy-700 hover:text-burgundy-900 transition-colors"
                    >
                      <span>View All in Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
