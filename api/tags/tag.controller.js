import { tagService } from "./tag.service.js"

export async function getTags(req, res) {
    try {

        // const filterBy = {
        //   txt: req.query.txt || '',
        // }
        const tags = await tagService.getAllTags()
        res.json(tags)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch tags' })
        console.error('Error fetching tags:', error)
    }
}

export async function getTagById(req, res) {
    try {
        const tagId = req.params.id
        const tag = await tagService.getById(tagId)
        res.json(tag)
    } catch (err) {
        res.status(400).send({ err: 'Failed to get tag' })
    }
}

export async function addTag(req, res) {

    try {
        const tag = req.body
        const addedTag = await tagService.add(tag)
        res.json(addedTag)
    } catch (err) {
        res.status(400).send({ err: 'Failed to add tag' })
    }
}

export async function updateTag(req, res) {

    try {
        const tag = req.body
        const tagObjId = req.params.id
        const tagToUpdate = await tagService.update(tag, tagObjId)
        res.json(tagToUpdate)
    } catch (err) {
        res.status(400).send({ err: 'Failed to update tag' })

    }
}

export async function removeTag(req, res) {
    try {
        const tagId = req.params.id
        await tagService.remove(tagId)
        res.json({ message: `Tag ${tagId} deleted successfully` })
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete tag' })
    }
}