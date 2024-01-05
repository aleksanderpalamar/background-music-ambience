"use client";

import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";

export const FullScreen = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    function handleFullScreenChange() {
      setIsFullScreen(document.fullscreenElement != null);
    }

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []);

  function toggleFullScreen() {
    const element = document.documentElement;

    if (!isFullScreen && typeof element.requestFullscreen === "function") {
      element.requestFullscreen();
    } else if (
      isFullScreen &&
      document.fullscreenElement != null &&
      typeof document.exitFullscreen === "function"
    ) {
      document.exitFullscreen();
    }
  }

  return (
    <div className="tooltip">
      <Button
        className="bg-transparent border-none hover:bg-zinc-900/10 rounded-full p-2"
        onClick={toggleFullScreen}
      >
        <ArrowUpDown className="text-2xl" />
      </Button>
    </div>
  );
};
