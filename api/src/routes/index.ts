import { Router } from 'express'
const router = Router();
import { ExcelAjson} from '../controllers/Excell.controller'

router.route('/productos/:name')
    .get(ExcelAjson)

export default router;