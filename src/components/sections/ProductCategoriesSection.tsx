import React from 'react';
import { ApparelCategory } from '../../types';
import { EnterpriseCatalog } from './EnterpriseCatalog/EnterpriseCatalog';

interface ProductCategoriesSectionProps {
  onOpenCustomizer: (category?: ApparelCategory) => void;
  onOpenQuoteModal?: () => void;
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  onOpenCustomizer,
  onOpenQuoteModal
}) => {
  return (
    <EnterpriseCatalog
      onOpenCustomizer={(catId) => onOpenCustomizer(catId as ApparelCategory)}
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
};
