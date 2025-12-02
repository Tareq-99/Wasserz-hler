

//GET /api/watermeter/values
//GET /api/watermeter/values/daily

import { Router } from 'express';
import { getAllValues } from '../controllers/watermeterController.js';

const router = Router();

router.get('/all', getAllValues);

export default router;
