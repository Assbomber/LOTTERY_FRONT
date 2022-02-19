import React,{useState} from 'react'
import styled from "styled-components";
import loginApi from "../Api/login";


function Login() {

  const [loginSelected,setLoginSelected]=useState(false);
  const [RegisterSelected,setRegisterSelected]=useState(true);
  const [loginEmail,setLoginEmail]=useState("");
  const [loginPassword,setLoginPassword]=useState("");
  const [error,setError]=useState("");


  const handleLoginClick=()=>{
    setLoginSelected(true);
    setRegisterSelected(false);
  }

  const handleRegisterClick=()=>{
    setLoginSelected(false);
    setRegisterSelected(true);
  }


  const handleLoginSubmit=async (e)=>{
    e.preventDefault();
    if(loginEmail==="" || loginPassword===""){
        setError("All fields are mandatory");
        return;
    }
    const res=await loginApi({email:loginEmail,password:loginPassword});
    if(res.result){
      //success
    }else{
      //failed
    }

  }
  return (
    <Container>
      {error!=="" && <div>{error}</div>}
        <Card>
            <Toggler>
              <Div onClick={handleLoginClick} selected={loginSelected}>Login</Div>
              <Div onClick={handleRegisterClick} selected={RegisterSelected}>Sign Up</Div>
            </Toggler>


              {
                loginSelected && 
                <LoginForm>
                    <input type="text" placeholder="Enter Email"/>
                    <button type="submit" onClick={(e)=>handleLoginSubmit(e)}>Login</button>
                </LoginForm>
              }

              {
                RegisterSelected && 
                <RegisterForm>
                    <input type="text" placeholder="Enter email" />
                    <button type="submit">Register</button>
                </RegisterForm>
              }
        </Card>
    </Container>
  )
}

export default Login

const Container=styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height: 100vh;
  background-color:white;
`;

const Card=styled.div`
  max-width:500px;
  width:500px;
  height:500px;
  background-color:#F2F5C8;
  border-radius: 10px;
`;

const Toggler=styled.div`
  display:flex;
  justify-content:center;

`;

const Div=styled.div`
    flex:1;
    border-bottom: 1px solid grey;
    padding:10px;
    text-align:center;
    background-color:${props=> props.selected ? "#C1DEAE":"transparent"};
`;

const RegisterForm=styled.form`

`;
const LoginForm=styled.form`

`;