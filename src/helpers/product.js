import { products } from "../data/products"

export const getProductList = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve(products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        resolve(products.find(product => product.id === Number(id)))
    })
}