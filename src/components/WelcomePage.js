import React, {useState} from "react"
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { foodData } from '../data/FoodData'

export const WelcomePage = () => {
    // NOTE VARIABLES AND STATES
    const [foodRecipes] = useState(foodData);

    // NOTE FUNCTIONS
    const displayRecipeCard = () => {
        return foodRecipes.map((recipes) => <FoodCard key={recipes.id} data={recipes} />) 
    }
    
    // NOTE RETURNS
    return (
        <>  
            <div style={{backgroundColor: "#fffedd",  width: "100%", height: "400px"}}>
                <div style={{position: "absolute", display: "flex", justifyContent: "center", alignItems: "center", height: "inherit", width: "inherit", color: "black"}}>
                    <h1 style={{padding: "10px" , backgroundColor: "#d43941", color: "white"}} className="bayon-regular">Browse our range of food recipes at a glance</h1>
                </div>
                <img className="search-recipe-image" alt={''} />
            </div>
            <div className="gallery-wrapper grid">
                <div style={{ alignItems: "center"}} className="row gy-5 row-cols-3">
                    {displayRecipeCard()}
                </div>
            </div>
        </>
    )
}

export const FoodCard = ({data}) => {
    // NOTE VARIABLES AND STATES

    // NOTE FUNCTIONS
    
    // NOTE RETURNS
    return ( 
        <>
            <div style={{backgroundColor: "#fffedd",border: "none"}} className="card">
                <img className="img-food" src={data.image_url} alt="food"></img>
                <div style={{color: "black"}} className="card-body">
                    <h5 className="card-title bayon-regular">{data.title}</h5>
                    <p style={{fontSize: "18px"}} className="card-text outfit-regular-20">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link className="bayon-regular" to={`recipes/${data.id}`}>
                        <Button style={{fontSize: "22px"}} className="btn" >View Recipe {'>'}</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default WelcomePage;