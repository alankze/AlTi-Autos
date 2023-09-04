import React from 'react'

function ScrollbarContainer() {
    return (
      <div className="scrollbar-container">
        {Array.from({ length: 18 }, (_, index) => (
          <div className="scrollbar" key={index}></div>
        ))}
      </div>
    );
  }

export default ScrollbarContainer;