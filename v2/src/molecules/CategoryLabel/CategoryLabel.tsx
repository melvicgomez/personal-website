import React from 'react';
import { ColorDesignCategory } from '../../types/common';
const CategoryLabel: React.FC<{ category: string }> = ({ category }) => (
  <span
    className={`${ColorDesignCategory[category]} text-sm font-bold px-2.5 py-0.5 rounded-full mb-1`}
  >
    {category}
  </span>
);

export default CategoryLabel;
