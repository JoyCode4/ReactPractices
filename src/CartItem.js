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
        const {data,
            onDecrease,
            onIncrease,
            onDelete} = this.props;
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
                        <a className="action-icons" onClick={()=>onIncrease(data)}><FaPlusCircle/></a>
                        <a className="action-icons" onClick={()=>onDecrease(data)}><FaMinusCircle/></a>
                        <a className="action-icons" onClick={()=>onDelete(data.id)}><FaTrashAlt/></a>
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