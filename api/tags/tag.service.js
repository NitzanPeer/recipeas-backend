import Tag from '../../model/tag.js'


export const tagService = {
    getAllTags,
    get,
    getById,
    add,
    update,
    remove
}

// this prob needs to be converted to query if I move the filtering front to back
async function getAllTags() {
    try {
        const tags = await Tag.find({})
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

        // example for future filter:
        // const tag = await Tag.find(({ title: 'קארי חומוס'}))

        console.log('found tag:', tag)
    } catch (e) {
        console.log(e.message)
    }
}

async function add(tag) {
    try {
        const newTag = new Tag({
            title: tag.title,
            description: tag.description,
            ingredients: tag.ingredients,
            method: tag.method
        })

        const addedTag = await newTag.save()
        return addedTag

        // why doesn't this work?:
        // await Tag.insertOne(tag)
    } catch (e) {
        console.log(e.message)
    }
}

async function update(tag, objId) {
    try {
        const tagToSave = {
            id: tag.id,
            title: tag.title,
            description: tag.description,
            ingredients: tag.ingredients,
            method: tag.method
        }
        await Tag.updateOne({ _id: objId }, tagToSave)
        console.log(`tag ${objId} was updated`)
    } catch (e) {
        console.log(e.message)
        throw new Error('Failed to update tag')
    }
}

async function remove(id) {
    try {
        await Tag.deleteOne({ _id: id })
        console.log(`tag ${id} was removed`)
    } catch (e) {
        console.log(e.message)
    }
}

