import {Router} from "express";
import {getProdutos,

} from "../controllers/produtoController";


const router = Router();
router.get('/produtos',getProdutos)
export default router;
