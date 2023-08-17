import {Router} from "express"
import productsController from "../controllers/products.controller.js"

const router = Router()

router.get("/:limit?/:page?/:query?/:sort?", productsController.getProducts)

router.get("/:id", productsController.getProduct)

router.put("/:id", productsController.updateProduct)

router.post("/", productsController.createProduct)

router.delete("/:id", productsController.deleteProduct)

export default router