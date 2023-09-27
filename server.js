import express from 'express'
import { MongoClient } from 'mongodb'

const PORT = 3030
const app = express()
const url = 'mongodb://localhost:27017/'
const dbName = 'Recipes'

app.get('/test', (req, res) => {
    res.json({ok: true })
})

app.get('/greet/:name', (req, res) => {
    res.json({ greeting: `Hello ${req.params.name}!` })
})

app.listen(PORT, () => console.log('server is listening on port', PORT))


import { recipesRoutes } from './api/recipes/recipe.routes.js'
app.use('/recipes', recipesRoutes)