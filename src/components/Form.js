import { Condiment } from "@next/font/google";
import React, { useEffect, useState } from "react";

const Form = () => {
  // Input Value State
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    mobile: "",
    address: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [apiMessage, setApiMessage] = useState({
    flag:"",
    message:""
  });
  const getDataHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value ,"aaaa")
    setApiMessage({
      flag:"",
      message:""
    })
    // setInput({ ...input, [name]: value });
    if(name == "mobile"){
      setInput((prevstate) => {
        return {
          ...prevstate,
          [name]: value?.replace(/[^0-9]/g, "")
        };
      });
    }else{
      setInput((prevstate) => {
        return {
          ...prevstate,
          [name]: value,
        };
      });
    }
    
  };

  // useEffect(() => {
  //   const { errors, isFormValidate } = valdiateInput(input);
  //   setFormErrors(errors);
  // }, [input]);

  const formRegistrationHandler = async (e) => {
    e.preventDefault();
    const { errors, isFormValidate } = valdiateInput(input);
    setFormErrors(errors);
    if (isFormValidate) {
      const data = await fetch("/api/users/add", {
        method: 'POST',
        body: JSON.stringify(input)
      })
      const res = await data.json();
      console.log(res, 'resres')
      if (res.status == 200) {
        setApiMessage({
          flag:"success",
          message:"Form submited successfuly"
        })
        setInput({
          fullname: "",
          email: "",
          mobile: "",
          address: "",
        })

      }else{
        setApiMessage({
          flag:"error",
          message:res.message
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
      errors.email = "Email address is not correct!";
      isFormValidate = false;
    }
    if (!values.mobile) {
      errors.mobile = "Phone can't empty!";
      isFormValidate = false;
    } else if (input.mobile.length < 10) {
      errors.mobile = "Phone number should be 10 digit!";
      isFormValidate = false;
    } else if (!phoneRegx.test(input.mobile)) {
      errors.mobile = "Phone number is not correct!";
      isFormValidate = false;
    }
    if (!values.address) {
      errors.address = "Address can't empty!";
      isFormValidate = false;
    }
    return { errors, isFormValidate };
  };
  return (
    <div className="bg-white rounded-2xl md:w-fit w-full m-auto shadow">
      <div className="bg-[#849b5c] md:px-10  px-5 py-5 rounded-t-2xl">
        <h3 className="text-center text-white text-xl font-bold uppercase tracking-wide">
          Registration Form
        </h3>
      </div>
      <form action="" method="POST" className="md:p-10 p-5">
        <div className="">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
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

            <div className="col-span-6 sm:col-span-3">
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

            <div className="col-span-6 sm:col-span-3">
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

            <div className="col-span-6 sm:col-span-3">
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
        <div className="mt-10 text-center">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md border-2 border-transparent bg-success py-2 px-8 text-base font-bold text-white shadow-sm hover:bg-white hover:text-success hover:border-success transition-all uppercase tracking-wide"
            onClick={formRegistrationHandler}
          >
            Register
          </button>
        </div>
      </form>
      {
        apiMessage.message && <p className="text-center  text-xl pb-5" style={{color:apiMessage.flag =="error"?"red":"green"}}>{apiMessage.message}</p>
      }
    </div>
  );
};

export default Form;
