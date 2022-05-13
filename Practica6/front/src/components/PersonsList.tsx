import React, { useEffect, FC, useState } from "react";
import { gql, useQuery, useMutation} from "@apollo/client"
import "./PersonsList.css"

type Person = {
    _id: string,
    name: string,
    surname: string
    phone: string,
    mail: string

}


type IProps ={
    reload: boolean
}

const GET_PERSONS = gql`
    query MyQuery {
        getPersons{
            _id
            name
            surname
            phone
            mail
        }
    }
`;
const DELETE_PERSON = gql`
    mutation deletePerson($mail: String){
        deletePerson(mail: $mail)
    }
`;


const PersonsList:FC<IProps> = (props) => {

    const { data, loading, error, refetch} = useQuery<{ getPersons: Person[] }>(GET_PERSONS);
    const [typeofSearch, setTypeofSearch] = useState<number>(0);
    const [deletePerson] = useMutation(DELETE_PERSON);
    const [mail, setMail] = useState<string>("");
    const [onDelete, setOnDelete] = useState<boolean>(false);
    

    useEffect(() => {
        refetch();
    }, [props.reload, onDelete])



    if(loading) return <div>Cargando...</div>;
    if(error) return <div>Error</div>;

    return (
        <div >
            <div >
            {typeofSearch===0 && data?.getPersons.map((person)=> ( //si el tipo de busqueda es 0
                <div className="lista" key={person._id} onClick={(e) => {setMail(person.mail)}}>
                    {person.name}  {person.surname}  {person.mail}  {person.phone} 
                </div>
            ))}

            {typeofSearch===1 && data && [...data?.getPersons].sort((a,b)=>{ //... desestructurando array, no modificamos el original "lo hacemos en la copia, no en la misma direccion de memoria"
                if(a.name < b.name){
                    return -1;
                }                                           //sort
                if(a.name>b.name){
                    return 1;
                }
                return 0; // por si hay dos valores iguales
            }).map((person)=> ( //si el tipo de busqueda es 1
                <div className="lista" key ={person._id} onClick={(e) => {setMail(person.mail)}}>
                    {person.name}  {person.surname}  {person.mail}  {person.phone} 
                </div>
            ))}
                
            {typeofSearch===2 && data && [...data?.getPersons].sort((a,b)=>{ //diferentes casos
                if(a.name < b.name){
                    return 1;
                }                                           //sort
                if(a.name>b.name){
                    return -1;
                }
                return 0; // por si hay dos valores iguales
            }).map((person)=> ( //si el tipo de busqueda es 1
                <div className="lista" key={person._id} onClick={(e) => {setMail(person.mail)}}>
                    {person.name}  {person.surname}  {person.mail}  {person.phone} 
                </div>
            ))}
            </div>
            <button className="b2" onClick={(e)=>{setTypeofSearch(1) }}>A/Z</button>
            <button className= "b1" onClick={(e)=>{setTypeofSearch(2) }}>Z/A</button>

            <button className="d" onClick={(e)=>[deletePerson({
                variables: {
                    mail,
                },
            }), setOnDelete(!onDelete)]}>Delete</button>  
        </div>
    )  
}
export default PersonsList;