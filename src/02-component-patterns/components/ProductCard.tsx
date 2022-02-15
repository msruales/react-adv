import styles from '../styles/styles.module.css'
import useProduct from "../hooks/useProduct";
import {createContext} from "react";
import {ProductCardProps, ProductContextProps} from "../interfaces/interfaces";
import { ProductTitle, ProductImage, ProductButtons} from "../components";

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ product, children } : ProductCardProps) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            increaseBy,
            counter,
            product
        }}>
            <div className={ styles.productCard }>
                {
                    children
                }
            </div>
        </Provider>

    )
}

export default ProductCard