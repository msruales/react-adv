import { ProductTitle, ProductImage, ProductCard, ProductButtons} from "../components";
import '../styles/custom-styles.css'
const product = {
    id: '1',
    title: 'Coffe Myd - CARD',
    img: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr/>

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                <ProductCard
                    product={ product }
                    className="bg-dark"
                >
                    <ProductCard.Image className="custom-image" />
                    <ProductCard.Title className="text-white" />
                    <ProductCard.Buttons className="custom-buttons" />
                </ProductCard>

                <ProductCard
                    product={ product }
                    className="bg-dark"
                >
                    <ProductImage className="custom-image"/>
                    <ProductTitle className="text-white"/>
                    <ProductButtons className="custom-buttons"/>
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage