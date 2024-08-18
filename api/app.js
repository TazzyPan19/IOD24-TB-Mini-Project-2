const express = require("express");
const cors = require('cors'); // Install with 'npm install cors'
const recipes = require('./models/zestyrecipes-model.json'); // Install with 'npm install cors'

// map all routes to the express app
const zestyrecipe_routes = require("./routes/zestyrecipes-routes");

// swagger requirements 
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const app = express();
const port = 8080;

app.use(cors()); // Enable CORS for all origins

// app.use(cors({
//   origin: 'http://localhost:3020' // Allow only this origin
// }));

app.use("/", express.static("public"));

app.use('/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
);

app.use("/zestyrecipes/v1", zestyrecipe_routes);

app.get("/recipes/:id", (req, res) => {
  const recipeId = req.params.id;
  const recipeData = recipes.find((item) => item.id.toString() === recipeId)

  res.send(recipeData);
});

app.listen(port, () => {
    console.log(`Caution! CORS-enabled web server listening at http://localhost:${port}`);
  });

// export the app
module.exports = app;
