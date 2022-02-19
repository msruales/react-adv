import {useState} from "react";
import {OnChangeArgs, ProductInCard} from "../interfaces/interfaces";


const useShoppingCart = () => {

    const [shoppingCart, setShoppingCart ] = useState<{ [key:string] : ProductInCard }>({})

    const onProductCountChange = ({count, product }: OnChangeArgs) => {

        setShoppingCart( oldShoppingCart => {

            const productInCart : ProductInCard = oldShoppingCart[product.id] || {...product, count: 0 }

            if( Math.max( productInCart.count + count, 0) > 0) {
                productInCart.count += count
                return {
                    ...oldShoppingCart,
                    [product.id] : productInCart
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart
            return { ...rest }

            // if( count === 0 ){
            //     const { [product.id]: toDelete, ...rest } = oldShoppingCart
            //     return { ...rest }
            // }
            // return {
            //     ...oldShoppingCart,
            //     [product.id] : {...product, count: count }
            // }
        })
    }

    return { shoppingCart, onProductCountChange }

}

export default useShoppingCart