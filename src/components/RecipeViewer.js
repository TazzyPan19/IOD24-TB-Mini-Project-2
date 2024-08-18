import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
// import { foodData } from "../data/FoodData";

export const RecipeViewer = () => {
    // NOTE VARIABLES AND STATES
    const [foodRecipe, setFoodRecipe] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:8080/recipes/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data)
                    setFoodRecipe(data)
                }})
            .catch((err) => console.log(err.error))
    },[params.id])

    
    function stringConvertor(strg, char) {
        if (strg === undefined) {
            return console.log("error")
        }

        const result = strg.split(char.toString());

        return result.map((item) => {
            return (
                <>
                    <li style={{padding: "10px"}} key={item}>{item}</li>
                </>
            )
        })

        // console.log(result);
    };

    // NOTE FUNCTIONS
    const displayRecipe = () => {
        if (!foodRecipe) {
            <div>No Recipe Found</div>
        }

        return (
            <>
            <div>
                <img style={{height: "400px", width: "100%", objectFit: "cover"}} src={foodRecipe.image_url} alt={`Food Recipe ${foodRecipe.id}`} />
            </div>
            <div style={{color: "black"}} className="content-body-wrapper-noct">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center" , backgroundColor: "#fffedd", padding: "20px", marginBottom: "20px"}}>
                    <div style={{margin: "0px 0px 0px 20px"}}>
                        <h3 style={{marginBottom: "0px"}} className="bayon-regular-36">{foodRecipe.title}</h3>
                    </div>
                    <div style={{margin: "0px 20px 0px 0px"}}>
                        <h4 style={{marginBottom: "0px"}} className="bayon-regular-30">{foodRecipe.catergory}</h4>
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{flexGrow: "1", backgroundColor: "#fffedd", padding:"20px"}}>
                        <h4 style={{marginBottom: "0px"}} className="bayon-regular-30">Ingredients</h4>
                        <ul>
                            {stringConvertor(foodRecipe.ingredients, "|")}
                        </ul>
                        <h4 style={{marginBottom: "0px"}} className="bayon-regular-30">Servings: {foodRecipe.servings}</h4>
                    </div>
                    <div style={{flexGrow: "1", backgroundColor: "#fffedd", padding:"20px", marginLeft: "20px"}}>
                        <h4 style={{marginBottom: "0px"}} className="bayon-regular-30">Instructions</h4>
                        <ul style={{listStyle: "none"}}>
                             {stringConvertor(foodRecipe.instructions, "|")}
                        </ul>
                    </div>
                </div>
            </div>
            </>
            )    
        };
  
    // NOTE RETURNS
    return (
            <div>
                {displayRecipe()}
            </div>
        ) 
}

export default RecipeViewer;

// NOTE Graveyard

// const displayRecipe = () => {
//     const result = foodRecipes.find(((tag) => tag.id === parseInt(params.id)));

//     if (result === undefined) {
//         console.log("Error! Reading Undefined", typeof params.id)
//     }

//     return (
//         <>
//             <h3>{result.title}</h3>
//             <h6>{result.catergory}</h6>
//             <p>{result.instructions}</p>
//         </>
//     )
// }