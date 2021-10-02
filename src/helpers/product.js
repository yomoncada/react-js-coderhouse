import { products } from "../data/products"

export const getProductList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}