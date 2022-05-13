import React, {FC, useState} from "react";
import { gql, useMutation } from "@apollo/client"
import "./AddPerson.css"

const ADD_PERSON = gql`
    mutation addPerson($name: String, $surname: String, $phone: String, $mail: String){
        addPerson(name: $name, surname: $surname, phone: $phone, mail: $mail){
            _id
        }
    }
`;

type Iprops = {
    setLoad: Function
    reload: boolean
}

const AddPerson:FC<Iprops> = (props) => {
    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [mail, setMail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    

    const [addPersonMutation] = useMutation(ADD_PERSON)

    return (
        <div>
         <input className="i1" type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/> 
         <input className="i2" type="text" placeholder="Surname" value={surname} onChange={(e)=>setSurname(e.target.value)}/>
         <input className="i3" type="text" placeholder="Mail" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
         <input className="i4" type="text" placeholder="Phone" value={mail} onChange={(e)=>setMail(e.target.value)}/>

         <button className="hola" onClick={(e)=> [addPersonMutation({
             variables: {
                name,
                surname,
                phone,
                mail,
            },
         }), props.setLoad(!props.reload), setName(""),setSurname(""),setMail(""),setPhone("")]
          }
          >ADD</button>
        </div>
    )

};

export default AddPerson;
