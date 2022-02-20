import React from 'react'
import Header from "../Components/Header"
import {Navigate} from "react-router-dom";

function Home() {
  return (
    <div>
    {!localStorage.getItem("token") && <Navigate to="/"/>}
        <Header/>
        Home
    </div>
  )
}

export default Home