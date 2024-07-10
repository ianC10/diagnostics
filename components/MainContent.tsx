import React, { useState } from 'react';

const MainContent: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string>('streaming');

  return (
    <main className="main-content">
      <img src="images/Frame 4564.svg" alt="Frame" className="frame-image" />
      <div className="music-toolbar">
        <div className="main-screen">
          <div className="current-song">
            <img src="images/Thumbnail.svg" alt="Current Song" className="current-song-img" />
            <p className="current-song-title">Title</p>
            <p className="current-song-description">Description</p>
            <img src="images/Progress.svg" alt="Progress Bar" className="progress-bar" />
          </div>
          <div className="play-button-block">
            <button className="play-button">
              <img src="images/button-previous--button-television-buttons-movies-skip-previous-video-controls.svg" alt="Previous" />
            </button>
            <button className="play-button">
              <img src="images/button-pause-2--button-television-buttons-movies-tv-pause-video-controls.svg" alt="Pause" />
            </button>
            <button className="play-button">
              <img src="images/button-next--button-television-buttons-movies-skip-next-video-controls.svg" alt="Next" />
            </button>
          </div>
          <button className="search-button">
            <img src="images/magnifying-glass--glass-search-magnifying.svg" alt="Search" />
          </button>
          <button className="heart-button">
            <img src="images/hearts-symbol--entertainment-gaming-card-hearts-symbol.svg" alt="Heart" />
          </button>
          <button className="down-button">
            <img src="images/down.svg" alt="Down" />
          </button>
          <div className="songs-block">
            <div className="music-options-block">
              <button className={`music-option ${activeOption === 'streaming' ? 'active' : 'inactive'}`} id="streaming-button" onClick={() => setActiveOption('streaming')}>Streaming</button>
              <button className={`music-option ${activeOption === 'radio' ? 'active' : 'inactive'}`} id="radio-button" onClick={() => setActiveOption('radio')}>Radio</button>
              <button className={`music-option ${activeOption === 'usb' ? 'active' : 'inactive'}`} id="usb-button" onClick={() => setActiveOption('usb')}>USB</button>
            </div>
            <div className="favourites-block">
              <p>FAVORITES</p>
              <div className="favourite-buttons">
                <button className="favourite-button">
                  <img src="images/album cover.svg" alt="Favourite 1" />
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (1).svg" alt="Favourite 2" />
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (2).svg" alt="Favourite 3" />
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (3).svg" alt="Favourite 4" />
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (4).svg" alt="Favourite 5" />
                </button>
                <button className="favourite-button">
                  <img src="images/album cover (5).svg" alt="Favourite 6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
