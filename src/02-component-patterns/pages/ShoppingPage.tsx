import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/"
import '../styles/custom-styles.css'
import { products } from "../data/products";
import { useShoppingCart } from '../hooks/useShoppingCart';





const ShoppingPage = () => {


       const { itemsCart, onProductCountChange, sCart } = useShoppingCart();

       return (
        <div>
            <h1>Shopping store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                
                {
                    products.map( product => (

                        <ProductCard 
                                key={product.id}
                                product={product}
                                className="bg-dark text-white"
                                // onChange={ (evento) => onProductCountChange(evento) }
                                onChange={ onProductCountChange }
                                value={ sCart[product.id]?.count || 0 }
                            >
                            
                            <ProductImage className="custom-image" />
                            <ProductTitle className="" />
                            <ProductButtons className="custom-buttons" />
                        </ProductCard>
                    ))
                }
               
               
               


            </div>

            <div className="shopping-cart">

                {
                    itemsCart.map( itemCart => (

                        
                                <ProductCard 
                                key={itemCart.id}
                                product={itemCart}
                                className="bg-dark text-white"
                                style={{
                                    width: '100px'
                                }}
                                value={itemCart.count}
                                onChange={ onProductCountChange }
                                >
                                    
                                    <ProductImage className="custom-image" />
                                    
                                    <ProductButtons className="custom-buttons" style={{
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }} />
                                </ProductCard>
                      
                            ))
                        }
            </div>
{/* 
            <div>
                <code>
                    {JSON.stringify(sCart, null, 5)}
                </code>
            </div> */}

        </div>
    )
}

export default ShoppingPage
