import { recipeService } from './recipe.service.js'

export async function getRecipes(req, res) {
    try {
        const recipess = await recipesService.query(req.query)
        res.send(recipess)
    } catch (err) {
        loggerService.error('Cannot get recipess', err)
        res.status(400).send({ err: 'Failed to get recipess' })
    }
}
