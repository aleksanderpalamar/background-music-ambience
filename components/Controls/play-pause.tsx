"use client";

import { Pause, Play } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export const PlayPause = () => {
  const [play, setPlay] = useState(true);  
  
  function playPause() {
    if (play) {
      setPlay(false);
    } else {
      setPlay(true);
    }
  }

  return (
    <div className="tooltip" data-tip="Play/Pause">
      <Button 
        className="bg-transparent border-none hover:bg-transparent"
        onClick={playPause}
      >
        {play ? <Play className="text-2xl"/> : <Pause  className="text-2xl"/>} 
      </Button>
    </div>
  );
};
