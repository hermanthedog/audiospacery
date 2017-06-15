import { Router } from 'express';
import * as GuidesController from '../controllers/Guides.controller';

const router = new Router();
router.route('/guides').get(GuidesController.getGuides);
router.route('/guidesPop').get(GuidesController.getPopularGuides);
router.route('/guides').post(GuidesController.postGuide);

export default router;
