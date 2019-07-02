import express from 'express';
import  {
  Controller as CSupervision,
} from '../api/controller/demo';

const router = express.Router();

/*
* Page Router, render Json
*/

router.get('/api/demo', demo, (req, res) => { res.json(req.appData) });
export default router;






