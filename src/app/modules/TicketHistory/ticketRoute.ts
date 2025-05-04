import express from 'express'
import { ticketHistoryController } from './Tickethistory.controller'

const router=express.Router()
router.post('/',ticketHistoryController.createTicketHistory)
router.get('/:email',ticketHistoryController.getTicketHistory)
export const TicketRoutes=router