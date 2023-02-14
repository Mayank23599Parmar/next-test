import React, { useState } from 'react'

export default function Login() {
    const [loginData, setLoginData] = useState({
        fullname: "",
        email:"",
        mobile:0,
        address:""
    })
    const onchangeHandeler = (event) => {
        const { name, value } = event.target
        setLoginData((prev)=>{
           return{
            ...prev,
            [name]:value
           }
        })
    }
    const submit=async()=>{
     const data= await   fetch("/api/users/add",{
            method: 'POST',
            body:JSON.stringify(loginData)
        })
    const res=  await data.json();
    }
    return (
        <div className='form'>
            <input value={loginData.fullname} onChange={onchangeHandeler} type={"text"} placeholder="enter user name" name="fullname" />
            <br />
            <input name='mobile' value={loginData.mobile} onChange={onchangeHandeler} type={'number'} placeholder="enter mobile" />
            <br />
            <br/>
            <input name='email' value={loginData.email} onChange={onchangeHandeler} type={'email'} placeholder="enter email" />
            <br/>
            <input name='address' value={loginData.address} onChange={onchangeHandeler} type={'text'} placeholder="enter address" />
            <br/>
            <button onClick={submit}>submit</button>
        </div>
    )
}
