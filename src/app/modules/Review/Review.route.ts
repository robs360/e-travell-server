import express from 'express'
import { reviewController } from './review.controller'

const router=express.Router()

router.get('/',reviewController.getAllReview)

export const reviewRoutes=router