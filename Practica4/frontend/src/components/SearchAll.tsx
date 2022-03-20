import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from '@emotion/styled'


type User = {
    name:string,
    surname:string,
    mail:string
}
const SearchAll = () =>{
    const [data, setData] = useState<User[]>()
    const onClickGetAll = async () =>{
        const aux = await axios.get<User[]>("http://localhost:8000/users")
        setData(aux.data)
    }
    const onClickDelete = async (name:string, surname:string, mail:string) =>{
         axios.delete("http://localhost:8000/deleteUser", {data:{name:name, surname:surname, mail:mail}}).then((response)=>{
             console.log(response);
            }).catch((error)=>{console.log(error)})
    }
    const onClickUpdate = async(index: number, request: User) => {
        await axios.post("http://localhost:8000/updateUser", [data![index], request]);
    }
   
    return(
        <div>
            <Button id="enviar" onClick={onClickGetAll}>Get All</Button>
            <div>
                {data && data.map((elem)=>{ //&& sirve para comprabar q existe data, si existe data, hazme un map
                    return ( // `${elem.name} `
                        <Muestra>
                            <Nombre>
                            {"Name: " + elem.name + "   "}
                            </Nombre>
                            <Apellido>
                            {"Surname: " + elem.surname + "   "}
                            </Apellido>
                            <Mail>
                            {"Mail: " + elem.mail}
                            </Mail>  
                            <Button onClick={(e)=>[onClickDelete(elem.name, elem.surname, elem.mail), setData(data.filter(aux=>aux.mail !== elem.mail))]}>Delete</Button>
                        </Muestra>
                    )
                })}
            </div>
        </div>
    )


}
const Mail = styled.div`
 text-align: center;
 p.geor {font-family: georgia;}
 p.medio {font-size:medium;}

`
const Nombre = styled.div`
 text-align: center;
 p.geor {font-family: georgia;}
 p.medio {font-size:medium;}

`
const Apellido = styled.div`
 text-align: center;
 p.geor {font-family: georgia;}
 p.medio {font-size:medium;}

`
const Muestra = styled.div`
 text-align: center;
 p.geor {font-family: georgia;}
 p.medio {font-size:medium;}
 display: flex;
 flex-wrap: wrap;
 flex-direction: column;

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
 
 

export default SearchAll;