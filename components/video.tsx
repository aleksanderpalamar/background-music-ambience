"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    onYouTubeIframeAPIReady?: () => void;
    YT?: any;
  }
}

const IdVideo = "jEh6wBZiyJo"

export function YouTubePlayer() {
  useEffect(() => {
    function onYouTubeIframeAPIReady() {
      new window.YT.Player("player", {
        videoId: IdVideo,
        playerVars: {
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          loop: 1,
          playlist: IdVideo,
          fs: 0,
          cc_load_policy: 0,
          iv_load_policy: 3,
          autohide: 0,
          autoplay: 1,
        },
        events: {
          onReady: onPlayerReady,
        },
      });
    }

    function onPlayerReady(event: any) {
      // Player is ready
      // Add any additional logic here
      event.target.playVideo();
    }

    // Dynamically load YouTube IFrame API script
    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(script);

    // Expose the onYouTubeIframeAPIReady function globally
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

    return () => {
      // Clean up the global function when component unmounts
      window.onYouTubeIframeAPIReady = undefined;
    };
  }, []);

  return (
    <div id="player" className="fixed top-0 left-0 w-full h-full scale-125" />
  );
}
