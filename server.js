import mongoose from 'mongoose'
import Express from 'express'
import dotenv from 'dotenv'
import { recipesRoutes } from './api/recipes/recipe.routes.js'
import { tagsRoutes } from './api/tags/tag.routes.js'
import cors from 'cors'

dotenv.config()

const app = Express()
const PORT = process.env.PORT || 3030

// const uri = 'mongodb://127.0.0.1/Recipes'
// const uri = 'mongodb://localhost/Recipes'
const uri = `mongodb+srv://admin:${process.env.MONGODB_PASS}@cluster0.rpwhwel.mongodb.net/Recipes`

app.listen(PORT, () => console.log('* Server is listening on port', PORT))

app.use(cors())
app.use(Express.json())

app.use('/recipes', recipesRoutes)
app.use('/tags', tagsRoutes)


async function connect() {
    try {
        await mongoose.connect(uri)
        console.log('* Connected to MongoDB')
    } catch (error) {
        console.error(error)
    }
}

connect()


