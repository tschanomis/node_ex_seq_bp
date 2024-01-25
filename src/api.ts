import { Router } from "express";

import user from "./components/user/user.router";

const router: Router = Router();
router.use(user);

export default router;
