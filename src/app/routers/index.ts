import express from 'express'
import { counterRoutes } from '../modules/counter/counter.routes';

const router=express.Router()
const modulesRouter = [
    {
      path: "/counter",
      route: counterRoutes,
    }, 
  ];
  
  modulesRouter.forEach((route) => router.use(route.path, route.route));
  export default router;
  