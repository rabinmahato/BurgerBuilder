import React, {Component} from 'react';
import AuxBox from '../../hoc/AuxBox';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 3,
            cheese: 5,
            meat: 2
        }
    }
    render() {
        return(
            <AuxBox>
                <Burger ingredients={this.state.ingredients}>
                </Burger>
                <div> Build Controls</div>
            </AuxBox>
        );
    }
}

export default BurgerBuilder;