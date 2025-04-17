import React from 'react';
import SplitViewport from '../components/SplitViewport';
import '../styles/SplitView.css';
import WomanCleaning from '../assets/Woman Cleaning In Kitchen-2.jpg';

const Home = () => {
  return (
    <div className="split-view-page">
      <SplitViewport
        leftImage="https://videos.ctfassets.net/hdznx4p7ef81/5vn9tvUSRp4Fszry8w14v0/4cf911076fd1a5a1380c1e0f3e361715/Gen-4_Man_pressure_washing_floor.mp4"
        rightImage={WomanCleaning}
        leftAlt="Before cleaning"
        rightAlt="After cleaning"
        leftOverlay={
          <div className="overlay-content">
            <h2 className="text-4xl font-bold text-white mb-4">Before</h2>
            <p className="text-white text-lg">See the difference our products make</p>
          </div>
        }
        rightOverlay={
          <div className="overlay-content">
            <h2 className="text-4xl font-bold text-white mb-4">After</h2>
            <p className="text-white text-lg">Experience the transformation</p>
          </div>
        }
        className="absolute inset-0"
      />
    </div>
  );
};

export default Home;