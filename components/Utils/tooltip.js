import React, { useState } from 'react';

function Tooltip({ text, children, style, childrenStyle }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseOver = () => {
    setShowTooltip(true);
  };

  const handleMouseOut = () => {
    setShowTooltip(false);
  };

  return (
    <div className="tooltip" style={style} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div className="original-content">{children}</div>
      {showTooltip && <span className="tooltiptext">{text}</span>}
    </div>
  );
}

export default Tooltip;