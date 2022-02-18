import styles from '../styles/styles.module.css'
import useProduct from "../hooks/useProduct";
import {createContext, ReactElement} from "react";
import {Product, ProductContextProps} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export interface  Props {
    product: Product;
    children?: ReactElement | ReactElement[],
    className?: string;
    style?: React.CSSProperties;
}

export const ProductCard = ({ product, children, className, style } : Props) => {

    const { counter, increaseBy } = useProduct()

    return (
        <Provider value={{
            increaseBy,
            counter,
            product
        }}>
            <div
                className={ `${styles.productCard} ${className}`}
                style={ style }
            >
                {
                    children
                }
            </div>
        </Provider>

    )
}

export default ProductCard