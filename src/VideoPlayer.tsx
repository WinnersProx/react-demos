import * as React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import videojs, { VideoJsPlayer, VideoJsPlayerOptions } from "video.js";
import "video.js/dist/video-js.css";

const baseVideoOptions: VideoJsPlayerOptions = {
  autoplay: false,
  controls: true,
  responsive: true,
  sources: [
    {
      type: "video/mp4",
      src: "",
    },
  ],
};

const useInitVideoPlayer = (src: string, onReady?: CallableFunction) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const playerRef = useRef<VideoJsPlayer | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      const options = { ...baseVideoOptions };
      if (options.sources?.length) options.sources[0].src = src;
      
      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("Player is ready");
        onReady?.(player);
      }));
    }
  }, [src, onReady]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return { videoRef, playerRef };
};

type VideoPlayerProps = { src: string; onReady?: (ref: VideoJsPlayer) => void };

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, onReady }) => {
  const { videoRef } = useInitVideoPlayer(src, onReady);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
};

export default VideoPlayer;
