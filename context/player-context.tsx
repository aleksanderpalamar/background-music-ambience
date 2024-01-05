import { createContext, useState } from "react";

interface Player {
  pauseVideo: () => void;
  playVideo: () => void;
  stopAllSounds: () => void;
}

export const PlayerContext = createContext({
  player: null as Player | null,
  setPlayer: (player: any) => {},
  stopAllSounds: () => {},
});

export function PlayerContextProvider({ children }: any) {
  const [player, setPlayer] = useState(null);

  const stopAllSounds = () => {
    const sounds = ["player", "forest", "fireplace", "ocean", "keyboard", "storm-rain", "city-rain", "snow", "birds", "coffee-shop", "underwater"];
    sounds.forEach(sound => {
      const audioElement = document.querySelector(`#${sound}`) as HTMLMediaElement;
      if (audioElement && typeof audioElement.pause === 'function') {
        audioElement.pause();
        audioElement.currentTime = 0;
      }
    });
  };

  return (
    <PlayerContext.Provider value={{ player, setPlayer, stopAllSounds }}>
      {children}
    </PlayerContext.Provider>
  );
};
