import React from "react";

const GlobalPopup = ({ children, closePopup }) => {
  return (
    <div className="popup popup-open">
      <div
        className="after:content:[''] after:fixed after:top-0 after:left-0 after:z-10 after:h-full after:w-full after:bg-color_00000050"
        onClick={(e) => {
          closePopup();
        }}
      />
      <div className="popup-wrapper fixed z-[20] left-1/2 top-[calc(50%+20px)] -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] px-5">{children}</div>
    </div>
  );
};

export default GlobalPopup;
