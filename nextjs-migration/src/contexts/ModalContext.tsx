"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { PortfolioItem } from '@/data/portfolioItemCardData';
import ItemDetailsPopUp from '@/components/ItemDetailsPopUp';

interface ModalContextType {
  selectedItem: PortfolioItem | null;
  openModal: (item: PortfolioItem) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <ModalContext.Provider value={{ selectedItem, openModal, closeModal }}>
      {children}
      {/* Render modal at the root level */}
      {selectedItem && (
        <ItemDetailsPopUp item={selectedItem} onClose={closeModal} />
      )}
    </ModalContext.Provider>
  );
};