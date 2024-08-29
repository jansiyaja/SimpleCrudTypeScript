
import express from'express'

import * as UserController from '../Controllers/userContoller'
import { testController } from "../Controllers/userContoller";

 const router = express.Router();
router.get('/',testController)

export default router