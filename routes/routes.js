import express from 'express'
import { getProducts,getProduct,createProduct,updateProduct,deleteProduct } from '../controllers/ProductController.js'

const router = express.Router()

// 1 forma de ingresar las rutas
/*router.get("/", getProducts)
router.get("/:id", getProduct)
router.put("/:id", updateProduct)
router.post("/", createProduct)
router.delete("/:id", deleteProduct)
*/

// 2 forma de ingresar las rutas

router.route("/").get(getProducts).post(createProduct)
router.route("/:id").get(getProduct).put(updateProduct).delete(deleteProduct)

export default router
