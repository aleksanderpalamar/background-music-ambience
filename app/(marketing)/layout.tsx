"use client";

import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full antialiased">
      <main className="h-full">
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
