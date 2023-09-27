import express from 'express'

import { recipeService } from './recipe.service.js'
import { dbService } from '../../services/db.service.js'


// const router = express.Router()

// router.get('/', getRecipes)
// router.post('/',  addRecipes)
// router.delete('/:id',  requireAuth, deleteRecipes)

export { router as recipesRoutes }


const router = express.Router()

// Import your other dependencies and services as needed.

// Define your route handler to get the collection data.
router.get('/', async (req, res) => {
  try {
    // Specify the collection name you want to retrieve.
    const collectionName = 'recipes' // Change this to your collection name if it's different.

    // Call the getCollection function to fetch the collection.
    const collection = await dbService.getCollection(collectionName)

    // Fetch all documents in the collection and convert them to an array.
    const recipes = await collection.find({}).toArray()

    // Send the retrieved data as JSON response.
    res.json({ recipes })
  } catch (err) {
    console.error('Error fetching recipes:', err)
    res.status(500).json({ error: 'Error fetching recipes' })
  }
})

// Add your other route handlers for POST and DELETE as needed.

