import {Router} from "express"
import viewsController from "../controllers/views.controller.js"

const router = Router()

router.get("/products", viewsController.getProductsRender)

router.get('/cart/:cid', viewsController.getCart)

router.get('/register', viewsController.register)

router.get('/login', viewsController.login)

router.get('/', viewsController.login)

router.get('/logout', viewsController.logout)

export default router