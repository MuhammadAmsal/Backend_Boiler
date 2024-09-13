import Express from 'express'
import postUser from './post.js'
const router=Express.Router()

router.use('/',postUser)

export default router

