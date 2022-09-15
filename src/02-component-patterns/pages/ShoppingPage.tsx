import { ProductCard } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';
import '../styles/custom-styles.css';

export const ShoppingPage = () => {
    const { onProductCountChange, shoppingCart } = useShoppingCart()
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {products.map(product => {
                    return (
                        <ProductCard
                            product={product}
                            className="bg-dark text-white"
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}
                        >
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Title className="text-bold" />
                            <ProductCard.Buttons className="custom-buttons" />
                        </ProductCard>)
                })}
            </div>
            <div className='shopping-cart'>
                {Object.entries(shoppingCart).map(([key, product]) => {  //MAPEA UN OBJETO 
                    return (
                        <ProductCard
                            key={key}
                            product={product}
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            onChange={(e) => onProductCountChange(e)}
                            value={product.count}>
                            <ProductCard.Image className="custom-image" />
                            <ProductCard.Buttons className="custom-buttons" />
                        </ProductCard>)
                })}
            </div>
        </div>
    )
}
