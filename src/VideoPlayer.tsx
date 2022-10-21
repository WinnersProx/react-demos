import React, { useRef } from "react";
import { Player } from "video-react";

/**
 * TODO: Customize video source for HLS video support
 * https://video-react.js.org/customize/customize-source/
 */


const videoURL =
  "https://firebasestorage.googleapis.com/v0/b/sl-gateway.appspot.com/o/ad-videos-folder%2F1644558224380_WazoPlus%20Ad.mp4?alt=media&token=ca82ef10-4178-4210-8620-63a317a789eb";
const posterURL =
  "https://firebasestorage.googleapis.com/v0/b/sl-gateway.appspot.com/o/news-items-images%2F1652868836971_ever.png?alt=media&token=359e3421-d18a-4507-8293-f2b8ed196833";

const YTBPlayer = () => {
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/KTwAQGIv_Ow"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
        height="500px"
        width="500px"
      />{" "}
    </div>
  );
};

export default function VideoPlayer() {
  const playerRef = useRef<any>(null);
  // video-react-big-play-button-center --> customize player button

  return (
    <Player
      playsInline
      poster={posterURL}
      src="https://www.youtube.com/watch?v=KTwAQGIv_Ow"
      ref={playerRef}
    />
  );
}
