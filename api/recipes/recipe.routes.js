import Express from 'express'
import { getRecipes, getRecipeById, addRecipe, removeRecipe, updateRecipe } from './recipe.controller.js'

const router = Express.Router()

router.get('/', getRecipes)
router.get('/:id', getRecipeById)
router.post('/', addRecipe)
router.put('/:id', updateRecipe)
router.delete('/:id', removeRecipe)

export { router as recipesRoutes }