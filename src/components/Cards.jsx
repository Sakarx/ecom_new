import React, {useState} from 'react'
import Card from './Card';
import CartItem from './CartItem';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

const Cards = () => {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(PAGE_PRODUCTS);
    const [products] = useState([
        {
            "id": 1,
            "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            "price": 109.95,
            "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            },
            {
            "id": 2,
            "title": "Mens Casual Premium Slim Fit T-Shirts ",
            "price": 22.3,
            "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
            },
            {
            "id": 3,
            "title": "Mens Cotton Jacket",
            "price": 55.99,
            "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
            "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
            }
    ]);

    const navigateTo = (targetPage)=>{
      setPage(targetPage);
    }

    const addToCart = (product)=>{
      setCart([...cart,product]);
    }

    const removeFromCart = (product)=>{
      setCart(
        cart.filter(item=> item!== product)
      );
    }

    const renderCart = ()=>{
      return (
      <CartItem cart={cart} removeFromCart={removeFromCart}/>
      );
    }

    console.log("cartItems",cart);

  return (
    <>
    <header className='bg-slate-400 flex justify-center m-4 p-4 text-white'>
      
        {page === PAGE_CART ? (
        <button onClick={()=> navigateTo(PAGE_PRODUCTS)}> Back to Products
        </button>
        )
        :(
          <button onClick={()=> navigateTo(PAGE_CART)}> Go to Cart ({cart.length})
          </button>
        )}

    </header>
    { page === PAGE_PRODUCTS && (
    <div className='border border-solid flex flex-row m-4 p-4'>
    {products.map((product,key) => {
       return  <Card  key={key} product={product} addToCart={addToCart}/>
    })}
    </div>
     )}
     {page === PAGE_CART && renderCart()}
    </>
  );
}

export default Cards