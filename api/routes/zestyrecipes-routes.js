const express = require("express");
const zestyrecipe_controller = require("../controllers/zestyrecipes-controller");
const router = express.Router();

// NOTE CRUD

router.get("/recipes", (request, response) => {
    zestyrecipe_controller.getAllData(request, response);
});

router.get("/recipes/:id", (request, response) => {
    zestyrecipe_controller.getSpecificData(request, response);
});

router.get("/recipes-cat", (request, response) => {
    zestyrecipe_controller.getDataByCatergory(request, response);
});

router.post("/recipe-post", (request, response) => {
    zestyrecipe_controller.postDataByUser(request, response);
});

module.exports = router;
