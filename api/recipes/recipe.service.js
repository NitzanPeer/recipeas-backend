import { dbService } from '../../services/db.service.js'
import mongodb from 'mongodb'
const {ObjectId} = mongodb

export const recipeService = {
    getRecipes,
    add
}

function getRecipes() {
    const collection = dbService.getCollection()
}

async function add(recipe) {
    try {
        const collection = await dbService.getCollection('recipes')
        await collection.insertOne(recipe)
        return recipe
    } catch (err) {
        loggerService.error('cannot insert recipe', err)
        throw err
    }
}