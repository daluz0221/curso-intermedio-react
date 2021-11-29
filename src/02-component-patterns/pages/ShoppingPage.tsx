import { ProductCard, ProductButtons, ProductImage, ProductTitle } from "../components/"



const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png'
}



const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product} >
                   
                    <ProductCard.Image />
                    <ProductCard.Title title={'hola mundo'} />
                    <ProductCard.Buttons />
                </ProductCard>
               
               <ProductCard product={product} >
                   
                   <ProductImage />
                   <ProductTitle title={"Hola mundo"} />
                   <ProductButtons />
               </ProductCard>


            </div>

        </div>
    )
}

export default ShoppingPage
