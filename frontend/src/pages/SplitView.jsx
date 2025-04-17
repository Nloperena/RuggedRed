import React from 'react';
import SplitViewport from '../components/SplitViewport';
import '../styles/SplitView.css';
import WomanCleaning from '../assets/Woman Cleaning In Kitchen-2.jpg';

const SplitView = () => {
  return (
    <div className="split-view-page">
      <SplitViewport
        leftImage="https://images.ctfassets.net/hdznx4p7ef81/4bmH8LUErm4lVMKisci0EQ/afe5be750a53f06d5c46903aafd010e5/CD_Cleaning_Grease_on_Table.jpg"
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

export default SplitView; 