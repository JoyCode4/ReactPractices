import React from "react";
import Cart from "./Cart.js";
import Navbar from "./Navbar.js";
// import Events from "./Events.js";

class App extends React.Component {

  constructor(){
      super();
      this.state = {
          products:[
              {
                  prices:100,
                  title:"Watch",
                  qty:10,
                  img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
                  id:1
              },
              {
                  prices:500,
                  title:"Mobile Phone",
                  qty:4,
                  img:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1181&q=80",
                  id:2
              },
              {
                  prices:10000,
                  title:"Laptop",
                  qty:2,
                  img:"https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",
                  id:3
              }
          ]
      }
  }

  handleIncreaseQuantity=(product)=>{
      // console.log("Increase\n",product);
      const {products}=this.state;
      const index = products.indexOf(product);

      products[index].qty+=1;
      this.setState({
          products:products
      })

  }

  handleDecreaseQuantity=(product)=>{
      // console.log("Decrease\n",product);
      const {products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty>0){
        products[index].qty -=1;
      }
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

  getCartCount=()=>{
    const {products} = this.state;
    let count=0;

    for(let i of products){
      count+=i.qty;
    }

    return count;
  }

  getCartTotal=()=>{
    const {products}=this.state;
    let total=0;
    for(let i of products){
      total+=(i.qty*i.prices)
    }
    
    return total;
  }

  render(){
    const {products} = this.state; 
    return (
      <div className="App">
        <Navbar 
          count={this.getCartCount()}
        />
        <Cart
          products={products}
          onIncrease={this.handleIncreaseQuantity} 
          onDecrease={this.handleDecreaseQuantity} 
          onDelete={this.handleDelete}
        />
        <div>TOTAL : {this.getCartTotal()}</div>
        {/* < Events /> */}
      </div>
    );
  }
}

export default App;
