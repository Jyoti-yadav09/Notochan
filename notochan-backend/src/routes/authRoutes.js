import express from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/authController.js";
import { isAuthenticated } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

// Example protected route
router.get("/dashboard", isAuthenticated, (req, res) => {
  res.json({ msg: "Welcome to dashboard!" });
});

export default router;
