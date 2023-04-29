import React from "react";
import { FaPlusCircle,FaMinusCircle,FaTrashAlt } from "react-icons/fa";

const CartItem=(props)=>{
    const {price,title, qty} = props.data;
    const {data,
        onDecrease,
        onIncrease,
        onDelete} = props;
    return(
        <div className="cart-item">
            <div className="left-block">
                <img alt="img" style={styles.image} src={data.img} />
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:"grey"}}> Rs : {price} </div>
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


const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:"grey"
    }
}

export default CartItem;