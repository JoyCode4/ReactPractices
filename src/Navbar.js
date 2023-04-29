import React from "react";
import { FaCartArrowDown } from "react-icons/fa";


const Navbar=(props)=>{
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <a style={styles.cartIcon}><FaCartArrowDown/></a>
                <span style={styles.cartCount}>3</span>       
            </div>
        </div>
    );
}


const styles = {
    cartIcon: {
      height: 32,
      marginRight: 20,
    },
    nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    cartIconContainer: {
      position: 'relative'
    },
    cartCount: {
        height:19,
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: -4,
        top: -19
    }
  };

export default Navbar;