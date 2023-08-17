import { viewService } from "../services/index.js"

const cartManager = viewService
const productManager = viewService

const getProductsRender = async (req, res) => {
    const user = req.session.user
    const products = await productManager.getProducts()
    const productsRender = products.docs.map((item) => {
        return {
            title: item.title,
            description: item.description,
            price: item.price,
            category: item.category,
            stock: item.stock,
            _id: item._id
        }
    })
    res.render("products", { products: productsRender, user })
}

const getCart = async (req, res) => {
    const { cid } = req.params
    const cart = await cartManager.getCart(cid)
    const cartRender = cart.type.map((item) => {
        return {
            product: item.product,
            quantity: item.quantity,
        }
    })
    res.render('carts', { cart: cartRender })
}

const register = (req, res) => {
    res.render('register')
}

const login = (req, res) => {
    res.render('login')
}

const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
}

export default {
    getProductsRender,
    getCart,
    register,
    login,
    logout
}