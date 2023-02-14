import React from "react";

const RemoveUser = ({ closePopup, removeUserHandler }) => {
  return (
    <div className="p-5 bg-white rounded-md w-full">
      <h3 className="text-center text-lg font-bold mb-10">Want To Delete?</h3>
      <div className="popup-action w-full flex flex-col sm:flex-row gap-4">
        <span
          className="inline-block basis-1/2 text-center py-2 px-5 font-medium transition-all border border-success bg-success text-white rounded-md hover:bg-transparent hover:text-success cursor-pointer"
          onClick={removeUserHandler}
        >
          Yes, Delete
        </span>
        <span
          className="inline-block basis-1/2 text-center py-2 px-5 font-medium transition-all border border-danger bg-danger text-white rounded-md hover:bg-transparent hover:text-danger cursor-pointer"
          onClick={closePopup}
        >
         No, Go Back
        </span>
      </div>
    </div>
  );
};

export default RemoveUser;
