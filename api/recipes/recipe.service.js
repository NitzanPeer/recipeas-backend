import { dbService } from '../../services/db.service.js'
import mongodb from 'mongodb'
const {ObjectId} = mongodb

export const recipeService = {
    getRecipes
}

function getRecipes() {
    const collection = dbService.getCollection()
}
