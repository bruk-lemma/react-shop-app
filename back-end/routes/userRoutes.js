import express from "express";
import {
  authUser,
  getUserProfile,
  RegisterUser,
} from "../controllers/userController.js";
import {protect} from "../middleware/authMiddleware.js";
const app = express();
const router = express.Router();

router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/register").post(RegisterUser);

//router.route("/:id").get(getProduct);

export default router;
