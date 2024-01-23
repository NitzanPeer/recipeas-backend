import { mongoose } from 'mongoose'

const recipeSchema = new mongoose.Schema({
    title: String,
    description: String,
    ingredients: Array,
    method: Array,
    tags: Array
})

const Recipe = mongoose.model("Recipe", recipeSchema)

export default Recipe