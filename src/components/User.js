import React from "react";

const User = ({
  user,
  removePopupHandler,
  setUserID,
  updatePopupHandler,
  setUpdateInput,
}) => {
  const { id, fullname, email, mobile, address } = user;

  // Get User ID on Click on Delete
  const removeUser = (userID) => {
    setUserID(userID);
    removePopupHandler();
  };
  const updateUser = (userID) => {
    setUserID(userID);
    updatePopupHandler();
    setUpdateInput({ fullname, email, mobile, address });
  };
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{fullname}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{mobile}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{address}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-left">
        <button
          type="button"
          className="inline-block text-gray-500 hover:text-gray-700 align-middle pr-3"
          onClick={() => {
            updateUser(id);
          }}
        >
          <svg
            width={20}
            height={20}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#2193b0"
          >
            <path d="M17 7.05a1 1 0 0 0-1 1V14a2.006 2.006 0 0 1-2 2H6a2.006 2.006 0 0 1-2-2V6a2.006 2.006 0 0 1 2-2h5.95a1 1 0 0 0 0-2H6a4.012 4.012 0 0 0-4 4v8a4.012 4.012 0 0 0 4 4h8a4.012 4.012 0 0 0 4-4V8.05a1 1 0 0 0-1-1Zm-7.7 3.9a.967.967 0 0 0 1.4 0l5.75-5.75a.99.99 0 0 0-1.4-1.4L9.3 9.55a.967.967 0 0 0 0 1.4Z" />
          </svg>
        </button>
        <button
          type="button"
          className="inline-block text-gray-500 hover:text-gray-700 align-middle"
          onClick={() => {
            removeUser(id);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            xmlSpace="preserve"
            fill="#da4f49"
          >
            <path d="m17.043 6.609-.674 12.565a.879.879 0 0 1-.87.826H4.5a.88.88 0 0 1-.87-.826L2.956 6.609a.874.874 0 0 1 .826-.913.874.874 0 0 1 .913.826l.63 11.739h9.37l.63-11.739a.874.874 0 0 1 .913-.826c.457.022.826.435.804.913zm2.305-2.913c0 .478-.391.87-.87.87H1.522c-.478 0-.87-.391-.87-.87s.391-.87.87-.87h4.783V.87c0-.413.283-.652.696-.652h6c.412-.001.695.239.695.652v1.957h4.783c.478 0 .87.391.87.87zm-11.522-.87h4.348V1.739H7.826v1.087zm.37 14.13c.435 0 .761-.413.761-.826L8.74 6.739a.775.775 0 0 0-.783-.761.744.744 0 0 0-.739.783l.217 9.413c0 .413.348.783.761.783zm3.587 0a.77.77 0 0 0 .761-.761l.217-9.391c0-.413-.326-.783-.739-.783a.771.771 0 0 0-.783.739l-.217 9.391a.766.766 0 0 0 .761.804c-.022 0-.022 0 0 0z" />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default User;
