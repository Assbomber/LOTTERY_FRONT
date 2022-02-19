import React,{useState} from 'react'
import styled from "styled-components";

function Header() {
    const [openMenu,setOpenMenu]=useState(false);

    const handleMenuOpen=()=>{
        setOpenMenu(!openMenu);
    }

  return (
    <Head>
        <Logo>
            <img src="/logo.png" alt=""/>
        </Logo>
        <Menu onClick={handleMenuOpen}><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2U2ZDk4NSI+PHBhdGggZD0iTTAsMjUuOHYxNy4yaDE3MnYtMTcuMnpNMCw3Ny40djE3LjJoMTcydi0xNy4yek0wLDEyOXYxNy4yaDE3MnYtMTcuMnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/></Menu>
        <Options show={openMenu}>
            <a>Home</a>
            <a>Tickets</a>
            <a>Transactions</a>
            <img src="https://img.icons8.com/office/40/000000/test-account.png" alt=""/>
        </Options>
        
    </Head>
  )
}

export default Header

const Head=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#084594;
    height:60px;
    padding:5px 20px;
`;
const Logo=styled.div`
    max-width:300px;
    &>img{
        width:60%;
    }
`;

const Menu=styled.div`
    display:flex;
    justify-content:end;
    align-items:center;
    display:none;
    cursor:pointer;
    img{
        width:20px;
    }

    @media only screen and (max-width:768px){
        display:block;
    }
`;
const Options=styled.div`
    display:flex;
    justify-content:end;
    align-items:center;
    color:#e6d985;
    font-size: 18px;
    &>*{
        margin-left:20px;
        cursor:pointer;
    }

    &>a:hover{
        color:white;
    }

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        background-color:#084594 ;
        position:absolute;
        display: ${props=>props.show? "flex":"none"};
        width:100%;
        top:60px;
        left:0;
        justify-content:start;
        align-items:start;
        
        &>*{
            margin-bottom:10px;
        }
    }
`;
