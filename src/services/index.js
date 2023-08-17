import CartsManager from "../dao/manager/db/carts.js"
import ProductsManager from "../dao/manager/db/products.js"
import productsService from "./products.service.js"
import cartsService from "./carts.service.js"

export const cartService = new cartsService(new CartsManager())
export const productService = new productsService(new ProductsManager())

