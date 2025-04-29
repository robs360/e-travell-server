import express from 'express'
import { counterController } from './counter.controller'
const router=express.Router()

router.post('/create',counterController.createCounter)

export const counterRoutes = router;