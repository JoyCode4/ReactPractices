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
    
    handleIncreaseQuantity=(product)=>{
        console.log("Increase\n",product);
        const {products}=this.state;
        const index = products.indexOf(product);

        products[index].qty+=1;
        this.setState({
            products:products
        })

    }

    handleDecreaseQuantity=(product)=>{
        console.log("Decrease\n",product);
        const {products}=this.state;
        const index=products.indexOf(product);

        products[index].qty -=1;
        this.setState({
            products:products
        })
    }

    handleDelete=(id)=>{
        const {products}=this.state;
        const items = products.filter((item)=>item.id!==id);

        this.setState({
            products:items
        })
    }
    render(){
        const {products} = this.state;
        return (
            <div className="cart">
                {products.map((product)=>{
                    return <CartItem data={product} key={product.id} onIncrease={this.handleIncreaseQuantity} onDecrease={this.handleDecreaseQuantity} onDelete={this.handleDelete}/>
                    })}
            </div>
        )
    }
}

export default Cart;