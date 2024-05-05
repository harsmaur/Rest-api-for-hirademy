import express from 'express'
import { assistantCreate, assistantDelete, assistantRead, assistantUpdate } from '../Controllers/assistant.js'

const router = express.Router();

router.post('/assistant', assistantCreate);
router.put('/assistant/:id', assistantUpdate);
router.get('/assistant/:id', assistantRead);
router.delete('/assistant/:id', assistantDelete);

export default router;
