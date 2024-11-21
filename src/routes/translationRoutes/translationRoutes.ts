import { Router } from 'express';
import { getTranslations } from '../../controllers/translationController/translationController';

const router = Router();

router.get('/translations/:translationGroupId', getTranslations);

export default router;