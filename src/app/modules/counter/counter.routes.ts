import express from 'express'
import { counterController } from './counter.controller'
const router=express.Router()

router.post('/create',counterController.createCounter)
router.get('/',counterController.getAllCounter)

export const counterRoutes = router;