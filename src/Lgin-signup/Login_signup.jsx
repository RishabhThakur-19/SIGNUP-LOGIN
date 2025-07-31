import React, { useState } from "react";
import './Login_signup.css';
function Login(){
    const [list,setlist]=useState("Signup")
    const work=()=>{}
    return(
        <div className="container">
            <div className="header">
                <div className="text">{list}</div>
                <div className="underline"></div>
            </div>
            <div   className="inputs">
                {list==="login"?<div></div>:<div id="entry" className="input">
                    <label  htmlFor="">Name </label>
                    <input  type="text"  placeholder=" enter your name"/>
                </div>}
                
                <div id="entry"  className="input">
                    <label htmlFor="">Email  </label>
                    <input type="text" placeholder="enter your email" />
                </div>
                <div  id="entry" className="input">
                    <label htmlFor="">Password </label>
                    <input  type="text" placeholder=" enter your password" />
                </div>
            </div>
            {list==="login"?<div></div>:<div className="forgot">forgot password? <span onClick={work}> click here</span></div>}
            
            <div className="submit-container">
                <div id="button" className={list==="signup"?"submitgray":"submit"} onClick={()=>{setlist("signup")}}>SIGN-UP</div>
                <div id="button" className={list==="login"?"submitgray":"submit"}  onClick={()=>{setlist("login")}}>LOGIN</div>

            </div>
        </div>
    )
}
export default Login;