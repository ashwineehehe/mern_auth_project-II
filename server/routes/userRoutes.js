import express from 'express'
// import userAuth from '../middleware.js/userauth';
import userAuth from '../middleware/userauth.js';
import { getUserData } from '../controllers/usercontroller.js';

const userRouter = express.Router();

userRouter.get('/data', userAuth, getUserData);

export default userRouter;
