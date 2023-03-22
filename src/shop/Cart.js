import { useState } from "react";

const Cart = ({ shopData, cart, setCart }) => {

    // const allPrice = Number(cart[0].price) + Number(cart[1].price);
    const allPrice = cart.reduce((current, next) => current + Number((next.price)), 0);

    const numHandler = () => {

    }
    return (
        <>
            <h1>장바구니</h1>
            {
                cart.map(it => <li>{it.name} {it.desc} {it.price} {it.num} <button onClick={() => numHandler()}>+</button>
                    <img src={it.img} alt="" />
                </li>)
            }

            <h2>
                합계 :
                {
                    allPrice
                }
            </h2>
        </>
    )
}

export default Cart;