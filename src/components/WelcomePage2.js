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
        <div className="gallery-wrapper grid">
            <div style={{ alignItems: "center"}} className="row gy-5 row-cols-3">
                {displayRecipeCard()}
            </div>
        </div>
    )
}

export const FoodCard = ({data}) => {
    // NOTE VARIABLES AND STATES

    // NOTE FUNCTIONS
    
    // NOTE RETURNS
    return ( 
        <>
            <div className="card">
                <img className="img-food" src={data.image_url} alt="food"></img>
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to={`recipes/${data.id}`}>
                        <Button className="btn btn-primary" >View Recipes</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default WelcomePage;