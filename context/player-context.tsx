import { createContext, useState } from "react";

interface Player {
  pauseVideo: () => void;
  playVideo: () => void;
  stopAllSounds: () => void;
}

export const PlayerContext = createContext({
  player: null as Player | null,
  setPlayer: (player: any) => {},
});

export function PlayerContextProvider({ children }: any) {
  const [player, setPlayer] = useState(null);

  return (
    <PlayerContext.Provider value={{ player, setPlayer }}>
      {children}
    </PlayerContext.Provider>
  );
}
