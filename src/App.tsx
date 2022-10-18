import * as React from 'react';
import { VideoJsPlayer } from 'video.js';
// import logo from './logo.svg';
import './App.css';
import VideoPlayer from './VideoPlayer';

const videoURL = 'https://firebasestorage.googleapis.com/v0/b/sl-gateway.appspot.com/o/ad-videos-folder%2F1644558224380_WazoPlus%20Ad.mp4?alt=media&token=ca82ef10-4178-4210-8620-63a317a789eb';


export default function App() {
  const handlePlayerReady = (ref:VideoJsPlayer) => {
    console.log('Got me...');
    ref.autoplay();
    
    ref.on('waiting', () => {
      console.log('waiting...');
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          My Video is here...
          <VideoPlayer src={videoURL} onReady={handlePlayerReady} />
        </div>
      </header>
    </div>
  );
}
