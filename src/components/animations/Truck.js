import { useState, useEffect } from 'react';

function AnimatedTruck({ initial = true, isVisible }) {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setIsAnimated(true);
        }
    }, [isVisible]);

    return (
        <button className={`order ${isAnimated ? 'animate' : ''}`}>
          <span className="default"></span>
          <span className="success">
            Saved
            <svg viewBox="0 0 12 10">
              <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
            </svg>
          </span>
          <div className="box"></div>
          <div className="truck">
            <div className="back"></div>
            <div className="front">
              <div className="window"></div>
            </div>
            <div className="light top"></div>
            <div className="light bottom"></div>
          </div>
          <div className="lines"></div>
        </button>
      );
  }

  export default AnimatedTruck;