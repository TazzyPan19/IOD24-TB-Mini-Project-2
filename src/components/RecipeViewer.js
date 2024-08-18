import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
// import { foodData } from "../data/FoodData";

export const RecipeViewer = () => {
    // NOTE VARIABLES AND STATES
    const [isloading, setIsLoading] = useState(false);
    const [foodRecipe, setFoodRecipe] = useState({});
    const params = useParams();

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:8080/recipes/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data)
                    setFoodRecipe(data)
                }})
            .catch((err) => console.log(err.error))
            .finally((resolve) => setIsLoading(false))
    },[params.id])

    // NOTE FUNCTIONS
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
    
    const displayRecipe = () => {
        if (isloading) {
            return (
                <div className="content-body-wrapper-loading" style={{color: "black"}}>
                    <Spinner animation="border" role="status">
                    </Spinner>
                    <h2 style={{padding: "20px"}} className="bayon-regular">Retrieving Data...</h2>
                </div>
            )
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
                    <div style={{flexGrow: "1", backgroundColor: "#fffedd", padding:"20px", width: "30%"}}>
                        <h4 style={{marginBottom: "0px"}} className="bayon-regular-30">Ingredients</h4>
                        <ul className="outfit-regular-20" style={{fontSize: "18px"}}>
                            {stringConvertor(foodRecipe.ingredients, "|")}
                        </ul>
                        <h4 style={{marginBottom: "0px"}} className="bayon-regular-30">Servings: {foodRecipe.servings}</h4>
                    </div>
                    <div style={{flexGrow: "1", backgroundColor: "#fffedd", padding:"20px", marginLeft: "20px", width: "70%"}}>
                        <h4 style={{marginBottom: "0px"}} className="bayon-regular-30">Instructions</h4>
                        <ul className="outfit-regular-20" style={{fontSize: "18px",listStyle: "none"}}>
                             {stringConvertor(foodRecipe.instructions, "|")}
                        </ul>
                        <Link to="/">
                            <Button style={{justifyContent: "end", alignItems: "end"}} className="btn btn-primary" >Return to Home</Button>
                        </Link>
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