import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('http://localhost:5000/products');
    const products = await loadedProducts.json();


    //if cart data is in the database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];
    
    //object er jonno= (for in) // array hole (for in)
    for (const id in storedCart) {
        const addedProduct = products.find(pduct => pduct._id === id);
        if (addedProduct) {

            //get quantity of the product
            const quant = storedCart[id];
            addedProduct.quantity = quant;

            //add the added product to the saved cart
            savedCart.push(addedProduct);
        }

    }

    // if you need to send two things
    // option-1 
    // return [products, saveCart]

    // option-2
    // return {products, saveCart}


    return savedCart;
}
export default cartProductsLoader;