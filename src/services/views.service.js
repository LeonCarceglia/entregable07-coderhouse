export default class viewsService {
    constructor(dao) {
      this.dao = dao
    }
  
    getProducts = (req, currentUrl) => {
      return this.dao.getProducts()
    }
  
    getCart = (product) => {
      return this.dao.getCart(cid)
    }
}  