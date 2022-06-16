const Router = require('express');
const {
  getIngredients,
  createIngredient,
  editIngredient,
  deleteIngredient,
} = require('../controllers/ingredients.controller.js');
const ingredientRoutes = Router({ mergeParams: true });

ingredientRoutes.get('/', getIngredients);

ingredientRoutes.post('/', createIngredient);

ingredientRoutes.put('/:id', editIngredient);

ingredientRoutes.delete('/:id', deleteIngredient);

module.exports = { ingredientRoutes };
