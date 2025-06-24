import express from 'express';
import { getOtherUsers, getProfile, login, logout, register } from "../controllers/user.controller.js";
import { isAuthenticated } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/login',login);
router.post('/register',register )
router.get("/get-profile", isAuthenticated, getProfile);
router.post('/logout',isAuthenticated, logout)
router.get('/get-other-users', isAuthenticated, getOtherUsers);

export default router;