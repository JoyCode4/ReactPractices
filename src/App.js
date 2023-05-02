import React from "react";
import Cart from "./Cart.js";
import Navbar from "./Navbar.js";
import {db} from "./index.js";

// import Events from "./Events.js";


class App extends React.Component {

  constructor(){
      super();
      this.state = {
          products:[],
          loading:true
      }
  }

  componentDidMount(){
    /*
    // It is for normal fetching of database
    db.collection("products")
    .get()
    .then((snapshot)=>{
      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        
        data["id"] = doc.id;
        return data;
      })

      this.setState({
        products:products,
        loading:false
      })
    })
    */

    // It is realtime update fetching of data
    db.collection("products")
    .onSnapshot((snapshot)=>{
      const products = snapshot.docs.map((doc)=>{
        const data = doc.data();
        
        data["id"] = doc.id;
        return data;
      })

      this.setState({
        products:products,
        loading:false
      })
    })
  }

  handleIncreaseQuantity=(product)=>{
      // console.log("Increase\n",product);
      const {products}=this.state;
      const index = products.indexOf(product);

      // products[index].qty+=1;
      // this.setState({
      //     products:products
      // })

      // 
      const docRef = db.collection("products")
      .doc(products[index].id);

      docRef.update({
        qty:products[index].qty+1
      })
      .then(()=>{
        console.log("Update Successfully");
      })
      .catch((err)=>{
        console.log("Error : "+err);
      })



  }

  handleDecreaseQuantity=(product)=>{
      // console.log("Decrease\n",product);
      const {products}=this.state;
      const index=products.indexOf(product);
      // if(products[index].qty>0){
      //   products[index].qty -=1;
      // }
      // this.setState({
      //   products:products
      // })

      const docRef = db.collection("products").doc(products[index].id);

      docRef.update({
        qty:products[index].qty-1
      })
      .then(()=>{
        console.log("Update Successfully");
      })
      .catch((err)=>{
        console.log("Error : "+err);
      })
  }

  handleDelete=(id)=>{
      // const {products}=this.state;
      // const items = products.filter((item)=>item.id!==id);

      // this.setState({
      //     products:items
      // })

      const docRef =db.collection("products").doc(id);

      docRef.delete()
      .then(()=>{
        console.log("Deleted Successfully");
      })
      .catch((err)=>{
        console.log("Error : "+err);
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
    const {products}= this.state;
    let total=0;
    for(let i of products){
      total+=(i.qty*i.price)
    }
    
    return total;
  }

  addProduct=()=>{
    db.collection("products")
    .add({
      img:"https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2FzaGluZyUyMG1hY2hpbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      price:29999,
      title:"Washing Machine",
      qty:4
    })
    .then((docRef)=>{
      console.log("Product has been added\n",docRef);
    })
    .catch((err)=>{
      console.log("Error : "+err);
    })

  }

  render(){
    const {products,loading} = this.state; 
    return (
      <div className="App">
        <Navbar 
          count={this.getCartCount()}
        />
        {/* <button onClick={this.addProduct}>Add Product</button> */}
        <Cart
          products={products}
          onIncrease={this.handleIncreaseQuantity} 
          onDecrease={this.handleDecreaseQuantity} 
          onDelete={this.handleDelete}
        />
        {loading && <h1>Loading Products...</h1>}
        <div>TOTAL : {this.getCartTotal()}</div>
        {/* < Events /> */}
      </div>
    );
  }
}

export default App;
