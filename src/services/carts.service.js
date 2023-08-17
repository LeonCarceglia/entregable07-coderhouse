export default class cartsService {
    constructor(dao) {
      this.dao = dao
    }
  
    getAllCarts = () => {
      return this.dao.getCarts()
    }
  
    createCart = (user) => {
      return this.dao.createCart(cart)
    }
  
    getCart = (id) => {
      return this.dao.getCart(id)
    }
  
    updateCart = (id, user) => {
      return this.dao.updateCart(id, cart)
    }
  
    deleteCart = (id) => {
      return this.dao.deleteCart(id)
    }

    addProductToCart = (ids, quantity) =>{
        return this.dao.addProductToCart(ids, quantity)
    }

    deleteProduct = (ids) => {
        return this.dao.deleteProduct(ids)
    }

    updateProductQuantity = (ids, quantity) => {
        return this.dao.updateProductQuantity(ids, quantity)
    }

    deleteProducts = (id) => {
        return this.dao.deleteProducts(id)
    }
  }
  