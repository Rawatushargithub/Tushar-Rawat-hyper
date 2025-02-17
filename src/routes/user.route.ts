import express from 'express';  // express error occured , when i install npm i --save-dev @types/express then it resolve 
import { registerUser, loginUser } from '../controllers/user.controller.js';
import { authenticateUser } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

// Example protected route
router.get('/profile', authenticateUser, (req, res) => {
  res.json({ message: 'Protected user profile', user: (req as any).user });
});

export default router;