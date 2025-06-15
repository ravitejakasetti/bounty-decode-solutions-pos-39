
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <motion.div 
      className="mb-12 flex flex-wrap gap-3 justify-center"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className={`rounded-full px-6 py-2 transition-all duration-300 ${
            selectedCategory === category 
              ? 'bg-bounty-orange hover:bg-bounty-orange/90 text-white' 
              : 'border-bounty-orange text-bounty-orange hover:bg-bounty-orange hover:text-white'
          }`}
        >
          {category}
        </Button>
      ))}
    </motion.div>
  );
};

export default CategoryFilter;
