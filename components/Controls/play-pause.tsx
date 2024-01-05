"use client";

import { Pause, Play } from "lucide-react";
import { Button } from "../ui/button";
import { useContext, useState } from "react";
import { PlayerContext } from "@/context/player-context";

export const PlayPause = () => {
  const { player } = useContext(PlayerContext);
  const [isPlaying, setIsPlaying] = useState(false);
  let isVideoPlaying = false;

  function playPauseMedia(mediaId: any) {
    if (mediaId === "video") {
      if (player) {
        if (isVideoPlaying) {
          if (player && typeof player.pauseVideo === "function") {
            player.pauseVideo();
          }
          isVideoPlaying = false;
        } else {
          if (player && typeof player.playVideo === "function") {
            player.playVideo();
          }
          isVideoPlaying = true;
        }
      }

      setIsPlaying(!isVideoPlaying);
    } else {
      const sound = document.getElementById(mediaId) as HTMLMediaElement;
      if (sound) {
        if (sound.paused) {
          sound.play();
        } else {
          sound.pause();
        }
      }
    }
  }

  return (
    <div className="tooltip">
      <Button
        className="bg-transparent border-none hover:bg-zinc-900/10 rounded-full p-2"
        onClick={() => playPauseMedia("video")}
      >
        {isPlaying ? (
          <Play role="button" className="text-2xl" />
        ) : (
          <Pause role="button" className="text-2xl" />
        )}
      </Button>
    </div>
  );
};
