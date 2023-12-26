import Express from 'express'
import { getTags, getTagById, addTag, removeTag, updateTag } from './tag.controller.js'

const router = Express.Router()

router.get('/', getTags)
router.get('/:id', getTagById)
router.post('/', addTag)
router.put('/:id', updateTag)
router.delete('/:id', removeTag)

export { router as tagsRoutes }