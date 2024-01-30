import Tag from '../../model/tag.js'
import { recipeService } from '../recipes/recipe.service.js'


export const tagService = {
    getAllTags,
    get,
    getById,
    add,
    update,
    remove
}

async function getAllTags() {
    try {
        const tags = await Tag.find({})
        console.log('tags fetched from mongo', tags)
        return tags
    } catch (error) {
        console.error('Error fetching tags:', error)
        return []
    }
}

async function getById(id) {
    try {
        const tag = await Tag.findById(id)
        return tag
    } catch (e) {
        console.log(e.message)
    }
}

async function get(filter) {
    try {
        const tag = await Tag.find(filter)

        console.log('found tag:', tag)
    } catch (e) {
        console.log(e.message)
    }
}

async function add(tag) {
    try {
        const newTag = new Tag({
            title: tag.title,
        })

        const addedTag = await newTag.save()
        return addedTag

    } catch (e) {
        console.log(e.message)
    }
}

async function update(tag, objId) {
    try {
        const tagToSave = {
            title: tag.title,
        }

        // update tag in mongo
        await Tag.updateOne({ _id: objId }, tagToSave)

        console.log(`tag ${objId} was updated`)
    } catch (e) {
        console.log(e.message)
        throw new Error('Failed to update tag')
    }
}

async function remove(tagId) {
    console.log("🚀 ~ remove ~ tagId:", tagId)
    try {
        // delete tag from recipes that hold it in their "tags" property
        await recipeService.removeTagFromAllRecipes(tagId)

        // delete tag from tag list in mongo
        await Tag.deleteOne({ _id: tagId })


        console.log(`tag ${tagId} was removed`)
    } catch (e) {
        console.log(e.message)
    }
}

