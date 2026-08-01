'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ModalContextType = {
  isAuditModalOpen: boolean;
  openAuditModal: () => void;
  closeAuditModal: () => void;
  // --- NEW SIDE PANEL STATE ---
  isSidePanelOpen: boolean;
  openSidePanel: () => void;
  closeSidePanel: () => void;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);

  const openAuditModal = () => setIsAuditModalOpen(true);
  const closeAuditModal = () => setIsAuditModalOpen(false);

  // --- NEW SIDE PANEL FUNCTIONS ---
  const openSidePanel = () => setIsSidePanelOpen(true);
  const closeSidePanel = () => setIsSidePanelOpen(false);

  return (
    <ModalContext.Provider value={{ 
      isAuditModalOpen, openAuditModal, closeAuditModal,
      isSidePanelOpen, openSidePanel, closeSidePanel 
    }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}