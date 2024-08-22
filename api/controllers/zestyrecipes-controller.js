const recipeAPI_Model = require("../models/zestyrecipes-model.json");

function getAllData(req, res) {
    const queryParam = parseInt(req.query.limit)

    if (queryParam) {
        const data = recipeAPI_Model.filter((item) => queryParam >= item.id);

        res.status(200)
        res.json(data)
    }

    else {
        res.status(200)
        res.json(recipeAPI_Model)
    }
}

function getSpecificData(req, res) {
    // console.log(req.params);
    let recipeId = req.params.id;
  
    matchedRecipe = recipeAPI_Model.find((item) => `${item.id}` === recipeId);
    console.log(req.params);

    if (recipeId && matchedRecipe) {
      res.status(200).json({ response: matchedRecipe });

    } else {
      res.status(404).send("Not found!");
    }
}  

function getDataByCatergory(req, res) {
    const queryParam = req.query.search;

    const data = recipeAPI_Model.filter((item) => item.catergory?.toLowerCase() === queryParam?.toLowerCase());
    const findCat = recipeAPI_Model.find((item) => item.catergory?.toLowerCase() === queryParam?.toLowerCase() );

    // NOTE - Debugging Consoles 

    // console.log("Query Entry:", queryParam)
    // console.log("Data Entry:", findCat)
 
    if (!queryParam || findCat === undefined) {
        return res.status(404).send("Not found!")
    }

    if (queryParam !== findCat ) {
        res.status(200)
        res.send(data)
    }
}   

function postDataByUser(req, res) {
    // const currtime = new Date.now();

    const newData = {
        id: recipeAPI_Model.length + 1 ,
        tagId: req.body.tagId,
        title: req.body.title,
        catergory: req.body.catergory,
        ingredients: req.body.ingredients,
        servings: req.body.servings,
        instructions: req.body.instructions
    }

    recipeAPI_Model.push(newData);
    res.status(201).send(newData);
}

module.exports = { 
    getAllData,
    getDataByCatergory,
    postDataByUser,
    getSpecificData
 };

// NOTE Testing JSON data

// function getAllRequest(item) {
//     const result = JSON.stringify(item);

//     console.log(result)
// }

// getAllRequest(recipeAPI_Model);

// NOTE Testing JSON data

// function getRangeOfData(req, res) {
//     const queryParam = parseInt(req.query.limit);

//     // const result = recipeAPI_Model.filter((item) => queryParam >= item.id).map((item) => item.title);
//     const result = recipeAPI_Model.filter((item) => queryParam >= item.id);

//     res.status(200)
//     res.json(result) 
// }