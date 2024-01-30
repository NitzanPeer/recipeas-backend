import Recipe from '../../model/recipe.js'


export const recipeService = {
    getAllRecipes,
    get,
    getById,
    add,
    update,
    remove,
    removeTagFromAllRecipes
}

async function getAllRecipes() {
    try {
        const recipes = await Recipe.find({})
        console.log("🚀 ~ getAllRecipes ~ recipes:", recipes)
        return recipes
    } catch (error) {
        console.error('Error fetching recipes:', error)
        return []
    }
}

async function getById(tagId) {
    try {
        const recipe = await Recipe.findById(tagId)
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
            method: recipe.method,
            tags: recipe.tags
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
    try {
        const recipeToSave = {
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            method: recipe.method,
            tags: recipe.tags
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
        await removeTagFromAllRecipes(id)
        await Recipe.deleteOne({ _id: id })
        console.log(`recipe ${id} was removed`)
    } catch (e) {
        console.log(e.message)
    }
}

async function removeTagFromAllRecipes(id) {
    try {
        await Recipe.updateMany(
            // $in - selects all the documents which contain the specific id within their tags array
            // $pull - removes all said instances of the id from all the "tags" arrays inside all the documents found
            { tags: { $in: [id] } },
            { $pull: { tags: id } }
        )

        console.log(`Tag ${id} removed from recipes`)
    } catch (e) {
        console.log(e.message)
        throw new Error('Failed to update recipes')
    }
}