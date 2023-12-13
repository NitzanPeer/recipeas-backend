import Recipe from '../../model/recipe.js'


export const recipeService = {
    getAllRecipes,
    get,
    getById,
    add,
    update,
    remove
}

// this needs to be converted to query so we get what recipes we want (filter etc)
async function getAllRecipes() {
    try {
        const recipes = await Recipe.find({})
        return recipes
    } catch (error) {
        console.error('Error fetching recipes:', error)
        return []
    }
}

async function getById(id) {
    try {
        const recipe = await Recipe.findById(id)
        console.log('found recipe:', recipe)
        return recipe
    } catch (e) {
        console.log(e.message)
    }
}

async function get(filter) {
    try {
        const recipe = await Recipe.find(filter)

        // example for future filter:
        // const recipe = await Recipe.find(({ title: 'קארי חומוס'}))

        console.log('found recipe:', recipe)
    } catch (e) {
        console.log(e.message)
    }
}

async function add(recipe) {
    try {
        const newRecipe = new Recipe({
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            method: recipe.method
        })

        const addedRecipe = await newRecipe.save()
        return addedRecipe

        // why doesn't this work?:
        // await Recipe.insertOne(recipe)
    } catch (e) {
        console.log(e.message)
    }
}

async function update(recipe, objId) {
    console.log("🚀 ~ file: recipe.service.js:45 ~ update ~ recipe:", recipe)
    try {
        const recipeToSave = {
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            method: recipe.method
        }
        await Recipe.updateOne({ _id: objId }, recipeToSave)
        console.log(`recipe ${objId} was updated`)
    } catch (e) {
        console.log(e.message)
        throw new Error('Failed to update recipe')
    }
}

async function remove(id) {
    try {
        await Recipe.deleteOne({ _id: id })
        console.log(`recipe ${id} was removed`)
    } catch (e) {
        console.log(e.message)
    }
}

