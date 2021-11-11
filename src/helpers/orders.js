import { getFirestore } from "../firebase/config"
import firebase from 'firebase'
import 'firebase/firestore'

export const generateOrder = (buyer, cart, total) => {
    return new Promise(async (resolve, reject) => {
        const order = {
            buyer: buyer,
            items: cart.map((product) => ({id: product.id, price: product.price, quantity: product.quantity})),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const db = getFirestore()
        const orders = db.collection('orders')
        const itemsToUpdate = db.collection('products')
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(product => product.id))
            
        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = cart.find(product => product.id === doc.id)

            if (doc.data().stock >= itemInCart.quantity) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.quantity})
            } else {
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })

        if (outOfStock.length === 0) {
            orders.add(order)
                .then((response) => {
                    batch.commit()
                    resolve(response.id)
                })
        } else {
           reject(outOfStock)
        }
    })   
}



    // cart.forEach((item) => {
    //     const docRef = db.collection('productos').doc(item.id)
    //     docRef.get() 
    //         .then((doc) => {
    //                 if (doc.data().stock >= item.cantidad) {
    //                     docRef.update({
    //                         stock: doc.data().stock - item.cantidad
    //                     })
    //                 } else {
    //                     alert("No hay stock de " + doc.data().name)
    //                 }
    //             }
    //         )
    // })