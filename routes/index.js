import Express from 'express'
import user from './user/index.js'
const router=Express.Router()

router.use('/user',user)

export default router

