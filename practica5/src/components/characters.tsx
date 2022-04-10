import React from "react"
import {useState, useEffect} from "react"
import {gql, useQuery} from "@apollo/client"
import Modal from "./modal"
import styled from '@emotion/styled'
import "./characters.css"

type ResultChar = {
    name: string
    status: string
    species: string
    gender: string
    origin: {
        name: string
    }
    location: {
        name: string
    }
    image: string
}

type ICharacter = {
    characters: {
        results: Array<ResultChar>
    }
}

const Characters = () =>{
   // const [dataD, setdataD] = useState<ICharacter>();
    const [pageNum, setPageNum] = useState<number>(1); // lo ponemos a 1, porque queremos empezar en la pagina 1 (usestate es comno una variable y useeffect como una funcion)
    const [show, setShow] = useState<boolean>(false);
    const [charInfo, SetCharInfo] = useState<ResultChar>();

    const CHARACTERS = gql`
        query MyQuery {
            characters(page: ${pageNum}){
                results{
                    name
                    status
                    species
                    gender
                    origin{
                        name
                    }
                    location{
                        name
                    }
                    image
                }
            }
        }
        `

    const {data, loading, error, refetch} = useQuery<ICharacter>(CHARACTERS);
    useEffect(() => {
        refetch();
    }, [pageNum])

    if(error){console.log(error)}
    if(loading){return <div>Loading</div>}
    

    return(
        <div>
            <div className="hgo">
                <Comoseve>
                {data && data.characters.results.map((elem)=>{
                    return(
                        //meter un if, en el q si la imagen q pincho corresponde con la q es sacar un modal con la info
                        <div>
                            <ButtonImg><img src={elem.image} alt={elem.name} onClick={(e)=>[setShow(true), SetCharInfo(elem)]}/></ButtonImg>    
                        </div>
                    )                   
                })}
                {charInfo && <Modal onClose={()=>setShow(false)} show={show} charInfo={charInfo!}/>}   
                </Comoseve>
                {pageNum !== 1 && <Button id="prev" onClick={(e)=>setPageNum(pageNum-1)}>Prev</Button>}
                <Input id="number" value={pageNum}></Input>
                {pageNum !== 42 && <Button id="next" onClick={(e)=>setPageNum(pageNum+1)}>Next</Button>}
            </div>
        </div>
    )
    
}
export default Characters;


const ButtonImg = styled.button`
background-color: transparent;
border: transparent;
`

const Comoseve = styled.div`
    border: 1px solid;
    backdrop-filter: blur(10px);
    
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-around;
    

    width: fit-content;
    height: 100%;
    color: hsl(146, 50%, 36%);  

    font-size:initial;
    font-family: sans-serif;
    
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

const Input = styled.input`
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