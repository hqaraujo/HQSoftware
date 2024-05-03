import "./cssComponents/Logo.css";
import { useState } from "react";

const url ='/src/img/logo.png'
const Logo = () => {
  return (
    <div className="container" id="logo" >
      <img src="/src/img/logo.png" alt="" />
    </div>
  )
}

export default Logo
