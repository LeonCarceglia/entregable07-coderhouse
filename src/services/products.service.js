export default class productsService {
  constructor(dao) {
    this.dao = dao
  }

  getAllProducts = (req, currentUrl) => {
    return this.dao.getProducts(req, currentUrl)
  }

  createProduct = (product) => {
    return this.dao.createProduct(product)
  }

  getProduct = (id) => {
    return this.dao.getProduct(id)
  }

  updateProduct = (id, product) => {
    return this.dao.updateProduct(id, product)
  }

  deleteProdocut = (id) => {
    return this.dao.deleteProdocut(id)
  }
}  