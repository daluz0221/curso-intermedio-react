import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";





export const useShoppingCart = () =>{


const [sCart, setSCart] = useState<{ [key:string]: ProductInCart }>({});

const itemsCart = Object.values(sCart);

    const onProductCountChange = ({count, product}:{count:number, product:Product}) => {
        //   console.log({count});
    
        setSCart( oldSCart => {


            const productInCart: ProductInCart = oldSCart[product.id] || {...product, count: 0};

            if (Math.max( productInCart.count + count, 0 ) > 0) {
                productInCart.count += count;
                return {
                    ...oldSCart,
                    [product.id]: productInCart
                }
            }

            //Borrar el producto
            const { [product.id]:toDelete, ...rest } = oldSCart;

            return {
                ...rest

            }

        
            // if (count === 0) {

            //     const {[product.id]: toDelete, ...rest} = oldSCart
                
                

            //     return{
            //         ...rest
                    
            //     }
            // }

            // return {
            //     ...oldSCart,
                
            //     [product.id]: {...product, count} 
            // }


        });

    }

    return {
        itemsCart,
        onProductCountChange,
        sCart
    } 

}
