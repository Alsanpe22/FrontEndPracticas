import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "@emotion/styled";

type Cocktail = {
    idDrink: string,
    strDrink: string,
    strInstructions: string,
    strDrinkThumb: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strIngredient11: string,
    strIngredient12: string,
    strIngredient13: string,
    strIngredient14: string,
    strIngredient15: string,
}

type AxiosCocktailResponse = {
    drinks: Array<Cocktail>
}

const SearchBar = () => {
    const [text, setText] = useState<string>("");
    const [data, setData] = useState<AxiosCocktailResponse>();

    const onClickC = async() => {
        const aux = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+text)
        setData(aux.data)
        setText("");
    }

    useEffect(() => {

    }, [data])

    return(
        <div>
            <Input type="text" placeholder="Cocktail" value={text} onChange={(e) => setText(e.target.value)}/>
            <Button onClick={onClickC}>Search</Button>
            {data && data.drinks.map((elem) => {
                return (
                    <Muestra>
                        <div onClick={(e) => setData({drinks: [elem]})}>
                            {elem.strDrink}
                        </div>
                        <Img src={elem.strDrinkThumb} alt={elem.strDrink}/>
                    </Muestra>
                )
            })}
        </div>
    )
}



const Img = styled.img`
    height = 250px;
    width = 250px;
`

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
const Muestra = styled.div`
text-align: center;
p.geor {font-family: georgia;}
p.medio {font-size:medium;}

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