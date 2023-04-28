import React from "react";
import { FaPlusCircle,FaMinusCircle,FaTrashAlt } from "react-icons/fa";

class CartItem extends React.Component{
    increaseQuantity= async ()=>{
        // setState form 1
        // this.setState({
            // qty:++this.state.qty
        // });

        // setState form 2 - if previous state is required use this
        await this.setState((previous_state)=>{
            return {
                qty:++previous_state.qty
            }
        })

        console.log(this.state.qty);
    }

    decreaseQuantity= async ()=>{

        await this.setState((previous_state)=>{
            if(previous_state.qty>0){
                return {
                    qty:--previous_state.qty
                }
            }
            else{
                return;
            }
        })

        console.log(this.state.qty);
    }

    render(){
        const {prices,title, qty} = this.props.data;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:"grey"}}> Rs : {prices} </div>
                    <div style={{color:"grey"}}> Qyt : {qty} </div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        {/* <img alt="increase" onClick={this.increaseQuantity} className="action-icons" src="https://www.flaticon.com/free-icon/add_992651?term=add&page=1&position=1&origin=search&related_id=992651"/> */}
                        {/* <img alt="decrease" onClick={this.decreaseQuantity} className="action-icons" src="https://fontawesome.com/v5/icons/link?f=classic&s=solid"/> */}
                        {/* <img alt="delete" className="action-icons" src="https://www.flaticon.com/free-icon/delete_1214428?term=delete&page=1&position=1&origin=search&related_id=1214428"/> */}
                        <a className="action-icons" onClick={this.increaseQuantity}><FaPlusCircle/></a>
                        <a className="action-icons" onClick={this.decreaseQuantity}><FaMinusCircle/></a>
                        <a className="action-icons"><FaTrashAlt/></a>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:"grey"
    }
}

export default CartItem;