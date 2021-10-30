import { getFirestore } from "../firebase/config"

export const getProductList = (categoryId = false) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore()
        const products = 
            categoryId 
                ? db.collection('products').where('category', '==', categoryId)
                : db.collection('products')

            products.get()
                .then((products) => {
                    const items = products.docs.map((product) => {
                        return {id: product.id, ...product.data()}
                    })

                    resolve(items)
                })
                .catch( (error) => reject(error))
    })
}

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const db = getFirestore()
        const products = db.collection('products')
        const item = products.doc(id)

        item.get()
            .then((product) => {
                if (product.exists) {
                    resolve({
                        id: product.id,
                        ...product.data()
                    });
                } else {
                    reject(false)
                }
            })
            .catch( (error) => reject(error))
    })
}