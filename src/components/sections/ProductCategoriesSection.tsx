import React from 'react';
import { EnterpriseCatalog } from './EnterpriseCatalog/EnterpriseCatalog';

interface ProductCategoriesSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ProductCategoriesSection: React.FC<ProductCategoriesSectionProps> = ({
  onOpenQuoteModal
}) => {
  return (
    <EnterpriseCatalog
      onOpenQuoteModal={onOpenQuoteModal}
    />
  );
};
