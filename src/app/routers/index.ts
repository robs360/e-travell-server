import express from 'express'
import { counterRoutes } from '../modules/counter/counter.routes';
import { TicketRoutes } from '../modules/TicketHistory/ticketRoute';
import { reviewRoutes } from '../modules/Review/Review.route';

const router=express.Router()
const modulesRouter = [
    {
      path: "/counter",
      route: counterRoutes,
    }, 
    {
      path: "/ticket",
      route: TicketRoutes
    }, 
    {
      path: "/review",
      route: reviewRoutes
    }, 
  ];
  
  modulesRouter.forEach((route) => router.use(route.path, route.route));
  export default router;
  