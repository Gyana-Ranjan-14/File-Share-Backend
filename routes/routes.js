import express from 'express';
import upload from '../middleware/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

const router = express.Router();

// Corrected route
router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;
