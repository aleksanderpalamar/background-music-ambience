import { ReactNode, createContext, useEffect, useMemo, useRef, useState } from "react";

export const AudioContext = createContext({
  playingAudios: [] as HTMLAudioElement[],
  setPlayingAudios: (() => {}) as React.Dispatch<React.SetStateAction<HTMLAudioElement[]>>,
});

// Crie um provedor para o contexto que cria os objetos de áudio
export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});
  const [audioLoaded, setAudioLoaded] = useState(false);
  const [playingAudios, setPlayingAudios] = useState<HTMLAudioElement[]>([]);
    
  const sounds = useMemo(() => [
    "birds",
    "keyboard",
    "city_traffic",
    "rain_city",
    "rain_forest",
    "river",
    "coffee",
    "fireplace",
    "deepspace",
    "ocean",
    "summer_storm",
  ], []);

  useEffect(() => {
    const loadAudioPromises = sounds.map((sound) => {
      return new Promise((resolve, reject) => {
        const audio = new Audio(`/assets/audio/${sound}.mp3`);
        audio.onerror = function() {
          console.error(`Error loading audio for ${sound}`);
          reject(new Error(`Error loading audio for ${sound}`));
        };
        audio.onloadeddata = function() {
          audioRefs.current[sound] = audio;
          resolve(true);
        };
      });
    });
  
    Promise.all(loadAudioPromises)
      .then(() => setAudioLoaded(true))
      .catch((error) => console.error(error));
  }, [sounds]);

  return (
    <AudioContext.Provider value={{ playingAudios, setPlayingAudios }}>
      {children}
    </AudioContext.Provider>
  );
};