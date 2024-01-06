"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useAmbientSound } from "@/hooks/use-ambient-sound";
import { MusicIcon } from "lucide-react";
import { useEffect, useState } from "react";

const sounds = [
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
];

export const AmbientSoundModal = () => {
  const [audioObjects, setAudioObjects] = useState<{
    [key: string]: HTMLAudioElement;
  }>({});
  const ambientSound = useAmbientSound();

  useEffect(() => {
    const newAudioObjects = sounds.reduce((acc, sound) => {
      const audio = new Audio(`/assets/audio/${sound}.mp3`);
      audio.loop = true;
      return { ...acc, [sound]: audio };
    }, {});

    setAudioObjects(newAudioObjects);
  }, []);

  function playSound(sound: string) {
    const audio = audioObjects[sound];
    if (audio) {
      audio.play();
    }
  }

  return (
    <Dialog open={ambientSound.isOpen} onOpenChange={ambientSound.onClose}>
      <DialogContent
        className="bg-gray-500 bg-clip-padding backdrop-filter 
            backdrop-blur bg-opacity-50 backdrop-saturate-100 
            backdrop-contrast-100 border-none text-white w-96 h-96 flex flex-col items-center justify-center"
      >
        <div className="grid grid-cols-3 gap-4 border-none">
          {sounds.map((sound) => (
            <div
              key={sound}
              className="flex flex-col items-center justify-center text-white"
            >
              <button
                className="focus:outline-none hover:bg-zinc-900/10 rounded-full p-2"
                onClick={() => playSound(sound)}
              >
                <MusicIcon name={sound} />
              </button>
              <span className="text-sm">{sound}</span>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
