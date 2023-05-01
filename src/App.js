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
    // const colRef = collection(db,"products");

    // onSnapshot(doc(db,"products"),(doc)=>{
    //   console.log(doc.data());
    // })

    // getDocs(colRef).then((snapshot)=>{
      // const products = snapshot.docs.map((doc)=>{
      //   const data = doc.data();

      //   data["id"] = doc.id;
      //   return data;
      // })

      // this.setState({
      //   products:products,
      //   loading:false
      // });
    // })

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
    const {products}= this.state;
    let total=0;
    for(let i of products){
      total+=(i.qty*i.price)
    }
    
    return total;
  }

  render(){
    const {products,loading} = this.state; 
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
        {loading && <h1>Loading Products...</h1>}
        <div>TOTAL : {this.getCartTotal()}</div>
        {/* < Events /> */}
      </div>
    );
  }
}

export default App;
