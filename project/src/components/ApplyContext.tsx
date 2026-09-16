import { createContext, useContext, useState, type ReactNode } from 'react';
import { ApplyModal } from '@/components/ApplyModal';

type ApplyContextType = {
  openApply: () => void;
};

const ApplyContext = createContext<ApplyContextType>({
  openApply: () => {},
});

export function ApplyProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ApplyContext.Provider value={{ openApply: () => setIsOpen(true) }}>
      {children}
      <ApplyModal open={isOpen} onClose={() => setIsOpen(false)} />
    </ApplyContext.Provider>
  );
}

export function useApply() {
  return useContext(ApplyContext);
}
