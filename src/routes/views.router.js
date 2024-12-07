import { Router } from "express";
import { getProductsServices } from "../services/products.services.js";
const router = Router();

router.get("/products", async (req, res) => {
    try {
       const result = await getProductsServices({...req.query});
    res.render("products", {products: result});
    } catch (error) {
        res.status(500).send("Fatal error");
    }
})

router.get("/realtimeproducts", async (req, res) =>{
    try {
        res.render("realtimeproducts");
    } catch (error) {
        res.status(500).send("Fatal error");
    }
})


router.get("/login", (req, res) => {
    res.render("login");
})

router.get("/register", (req, res) => {
    res.render("register");
})

export default router;