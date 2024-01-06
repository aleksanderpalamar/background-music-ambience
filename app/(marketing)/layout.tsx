"use client";

import { AudioProvider } from "@/context/audio-context";
import { PlayerContextProvider } from "@/context/player-context";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PlayerContextProvider>
      <AudioProvider>
        <div className="h-full antialiased">
          <main className="h-full">{children}</main>
        </div>
      </AudioProvider>
    </PlayerContextProvider>
  );
};

export default MainLayout;
