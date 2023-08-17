import {Router} from "express"
import cartsController from "../controllers/carts.controller.js"

const router = Router()

router.post("/", cartsController.createCart)

router.get("/", cartsController.getCarts)

router.get("/:id", cartsController.getCart)

router.post("/:cid/product/:pid", cartsController.addProductToCart)

router.delete("/:cid/products/:pid", cartsController.deleteProduct)

router.put("/:cid", cartsController.updateCart)

router.put("/:cid/products/:pid", cartsController.updateProductQuantity)

router.delete("/:cid", cartsController.deleteProducts)

export default router