import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            prices:999,
            title:"Mobile Phone",
            qty:1,
            img:""
        }
    }
    render(){
        const {prices,title, qty} = this.state;
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
                        <img alt="increase" className="action-icons" src="https://www.flaticon.com/free-icon/add_992651?term=add&page=1&position=1&origin=search&related_id=992651"/>
                        <img alt="decrease" className="action-icons" src="https://fontawesome.com/v5/icons/link?f=classic&s=solid"/>
                        <img alt="delete" className="action-icons" src="https://www.flaticon.com/free-icon/delete_1214428?term=delete&page=1&position=1&origin=search&related_id=1214428"/>
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