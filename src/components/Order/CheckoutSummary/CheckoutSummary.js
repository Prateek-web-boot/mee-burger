import React from 'react';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckOut}>
            <h1>We hope it tastes well !</h1>
            <div className = {classes.CheckOutBurger}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}
                style = {{padding: '1.5rem'}}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}
                style = {{padding: '1.5rem'}}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;