import React, { useState } from "react";

const UpdateForm = ({ updateInput, closePopup, userID, fechData }) => {
  const { fullname, email, mobile, address } = updateInput;

  // Input Value State
  const [input, setInput] = useState({
    fullname: fullname.trim(),
    email: email.trim(),
    mobile: mobile,
    address: address.trim(),
  });
  const [formErrors, setFormErrors] = useState({});
  const [apiMessage, setApiMessage] = useState({
    flag: "",
    message: ""
  });
  const getDataHandler = (event) => {
    const { name, value } = event.target;
    setApiMessage({
      flag: "",
      message: ""
    })
    if (name == "mobile") {
      setInput((prevstate) => {
        return {
          ...prevstate,
          [name]: value?.replace(/[^0-9]/g, "")
        };
      });
    } else {
      setInput((prevstate) => {
        return {
          ...prevstate,
          [name]: value,
        };
      });
    }

  };

  const formUpdateHandler = async (e) => {
    // debugger
    e.preventDefault();
    const { errors, isFormValidate } = valdiateInput(input);
    console.log(input, 'inputinput');
    setFormErrors(errors);
    if (isFormValidate) {
      console.log("Form Updating...", userID);
      const data = await fetch(`/api/users/update/${userID}`, {
        method: 'PUT',
        body: JSON.stringify(input)
      })
      const res = await data.json();
      if (res.status == 200) {
        setApiMessage({
          flag: "success",
          message: "Form submited successfuly"
        })
        fechData()
        setInput({
          fullname: "",
          email: "",
          mobile: "",
          address: "",
        })
        closePopup()
      } else {
        setApiMessage({
          flag: "error",
          message: res.message
        })
      }
    }
  };

  // Validate Inputs
  const valdiateInput = (values) => {
    const errors = {};
    let isFormValidate = true;
    // Regx For Email
    const emailRegx = new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z.-]+.com$");
    // Regx For Phone
    const phoneRegx = new RegExp(
      /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
    );

    if (!values.fullname) {
      errors.fullname = "Fullname can't empty!";
      isFormValidate = false;
    } else if (/\d/.test(values.fullname)) {
      errors.fullname = "Fullname contain only character!";
      isFormValidate = false;
    }
    if (!values.email) {
      errors.email = "Email can't empty!";
      isFormValidate = false;
    } else if (!emailRegx.test(input.email)) {
      console.log(emailRegx.test(input.email), "shreyansh");
      errors.email = "Email address is not correct!";
      isFormValidate = false;
    }
    if (!values.mobile) {
      errors.mobile = "Mobile can't empty!";
      isFormValidate = false;
    } else if (input.mobile.length < 10) {
      errors.mobile = "Mobile number should be 10 digit!";
      isFormValidate = false;
    } else if (!phoneRegx.test(input.mobile)) {
      errors.mobile = "Mobile number is not correct!";
      isFormValidate = false;
    }
    if (!values.address) {
      errors.address = "Address can't empty!";
      isFormValidate = false;
    }
    return { errors, isFormValidate };
  };
  return (
    <div className="update-form bg-white rounded-2xl w-full">
      <div className="bg-[#849b5c] p-5 rounded-t-2xl">
        <h3 className="text-center text-white text-lg font-bold uppercase tracking-wide">
          Update User Details
        </h3>
      </div>
      <form action="" method="POST" className="p-5 overflow-y-auto md:h-full h-[400px]">
        <div className="">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              <label
                htmlFor="first-name"
                className="block text-base font-semibold text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={input.fullname}
                onChange={getDataHandler}
                className={`mt-1 block w-full border-b outline-none sm:text-md py-2 ${formErrors.fullname
                    ? "border-red-600 focus:border-red-600"
                    : "border-gray-300 focus:border-gray-800"
                  }`}
              />
              {formErrors.fullname && (
                <span className="text-sm text-red-600 pt-2 block">
                  {formErrors.fullname}
                </span>
              )}
            </div>

            <div className="col-span-12">
              <label
                htmlFor="email-address"
                className="block text-base font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={input.email}
                onChange={getDataHandler}
                className={`mt-1 block w-full border-b outline-none sm:text-md py-2 ${formErrors.email
                    ? "border-red-600 focus:border-red-600"
                    : "border-gray-300 focus:border-gray-800"
                  }`}
              />
              {formErrors.email && (
                <span className="text-sm text-red-600 pt-2 block">
                  {formErrors.email}
                </span>
              )}
            </div>

            <div className="col-span-12">
              <label
                htmlFor="first-name"
                className="block text-base font-semibold text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile"
                value={input.mobile}
                onChange={getDataHandler}
                className={`mt-1 block w-full border-b outline-none sm:text-md py-2 ${formErrors.mobile
                    ? "border-red-600 focus:border-red-600"
                    : "border-gray-300 focus:border-gray-800"
                  }`}
                maxLength={10}
              />
              {formErrors.mobile && (
                <span className="text-sm text-red-600 pt-2 block">
                  {formErrors.mobile}
                </span>
              )}
            </div>

            <div className="col-span-12">
              <label
                htmlFor="email-address"
                className="block text-base font-semibold text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={input.address}
                onChange={getDataHandler}
                className={`mt-1 block w-full border-b outline-none sm:text-md py-2 ${formErrors.address
                    ? "border-red-600 focus:border-red-600"
                    : "border-gray-300 focus:border-gray-800"
                  }`}
              />
              {formErrors.address && (
                <span className="text-sm text-red-600 pt-2 block">
                  {formErrors.address}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10 text-center w-full flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="basis-1/2 text-center py-2 px-5 font-medium transition-all border border-success bg-success text-white rounded-md hover:bg-transparent hover:text-success cursor-pointer"
            onClick={formUpdateHandler}
          >
            Update
          </button>
          <button
            type="submit"
            className="basis-1/2 text-center py-2 px-5 font-medium transition-all border border-danger bg-danger text-white rounded-md hover:bg-transparent hover:text-danger cursor-pointer"
            onClick={closePopup}
          >
            Cancel
          </button>
        </div>
      </form>
      {
        apiMessage.message && <p className="text-center  text-[16px] pb-5" style={{ color: apiMessage.flag == "error" ? "red" : "green" }}>{apiMessage.message}</p>
      }
    </div>
  );
};
export default UpdateForm;
