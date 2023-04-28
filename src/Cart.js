import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
            products:[
                {prices:99,
                    title:"Watch",
                    qty:10,
                    img:"",
                    id:1
                },
                {
                    prices:199,
                    title:"Mobile Phone",
                    qty:4,
                    img:"",
                    id:2
                },
                {
                    prices:9999,
                    title:"Laptop",
                    qty:2,
                    img:"",
                    id:3
                }
            ]
        }
    }
    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem data={product} key={product.id}/>
                    })}
            </div>
        )
    }
}

export default Cart;