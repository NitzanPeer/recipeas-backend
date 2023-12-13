import { recipeService } from "./recipe.service.js"

export async function getRecipes(req, res) {
    try {

        // const filterBy = {
        //   txt: req.query.txt || '',
        // }
        const recipes = await recipeService.getAllRecipes()
        console.log(recipes)
        res.json({ recipes })
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch recipes' })
        console.error('Error fetching recipes:', error)
    }
}

export async function getRecipeById(req, res) {
    try {
        const recipeId = req.params.id
        const recipe = await recipeService.getById(recipeId)
        res.json(recipe)
    } catch (err) {
        res.status(400).send({ err: 'Failed to get recipe' })
    }
}

export async function addRecipe(req, res) {

    try {
        const recipe = req.body
        const addedRecipe = await recipeService.add(recipe)
        res.json(addedRecipe)
    } catch (err) {
        res.status(400).send({ err: 'Failed to add recipe' })
    }
}

export async function updateRecipe(req, res) {

    try {
        const recipe = req.body
        const recipeObjId = req.params.id
        const recipeToUpdate = await recipeService.update(recipe, recipeObjId)
        res.json(recipeToUpdate)
    } catch (err) {
        res.status(400).send({ err: 'Failed to update recipe' })

    }
}

export async function removeRecipe(req, res) {
    try {
        const recipeId = req.params.id
        await recipeService.remove(recipeId)
        res.json({ message: `Recipe ${recipeId} deleted successfully` })
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete recipe' })
    }
}