import React, { useState } from "react";
import axios from "axios";
import styled from "@emotion/styled";

const SearchBar = () =>{
// solo se puede cambiar el valor con una funcion set, porq es como si fuera constante
    const [name, setName] = useState<string>("")
    const [surname, setSurname] = useState<string>("")
    const [mail, setMail] = useState<string>("")
    
    const OnClickSend = async () =>{
        const newUser ={
            name: name,
            surname: surname,
            mail: mail
        }

        axios.post("http://localhost:8000/postUser", newUser).then((response)=>{
            console.log(response)
        }).catch((error)=>{console.log(error)})
        setName("")
        setSurname("")
        setMail("")
        
    }

        return (
            <div>
                <Input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/> 
                <Input type="text" placeholder="Surname" value={surname} onChange={(e)=>setSurname(e.target.value)}/> 
                <Input type="text" placeholder="Mail" value={mail} onChange={(e)=>setMail(e.target.value)}/> 
                <Button onClick={OnClickSend}>Send</Button>
            </div>
        )

}

const Input = styled.input`
    border: none;
    border-bottom: 3px solid #FF7E31;
    font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
    height: 40px;
    line-height: 40px;
    outline: 0;
    overflow: hidden;
    padding: 0 20px;
    margin: 20px;
`

const Button = styled.button`
 background-color: initial;
    background-image: linear-gradient(-180deg, #FF7E31, #E62C03);
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: Inter,-apple-system,system-ui,Roboto,"Helvetica Neue",Arial,sans-serif;
    height: 40px;
    line-height: 40px;
    outline: 0;
    overflow: hidden;
    padding: 0 20px;
    pointer-events: auto;
    position: relative;
    text-align: center;
    touch-action: manipulation;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: top;
    white-space: nowrap;
    z-index: 9;
    border: 0;
    transition: box-shadow .2s;
    margin: 20px;
    &:hover {
        box-shadow: rgba(253, 76, 0, 0.5) 0 3px 8px;
    }
`













export default SearchBar;