import express from 'express'
import { counterRoutes } from '../modules/counter/counter.routes';
import { TicketRoutes } from '../modules/TicketHistory/ticketRoute';
import { reviewRoutes } from '../modules/Review/Review.route';
import { topHotelRoutes } from '../modules/TopHotel/TopHotel.controller';
import { userRoutes } from '../modules/user/user.routes';

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
    {
      path:'/top',
      route:topHotelRoutes
    },
    {
      path:'/user',
      route:userRoutes
    }
  ];
  
  modulesRouter.forEach((route) => router.use(route.path, route.route));
  export default router;
  