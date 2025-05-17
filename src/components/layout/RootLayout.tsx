'use client';

import { ReactNode } from 'react';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground scrollbar-hide scroll-smooth">
      {children}
    </div>
  );
};

export default RootLayout;
