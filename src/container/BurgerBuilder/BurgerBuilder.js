import React, {Component} from 'react';
import AuxBox from '../../hoc/AuxBox';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    render() {
        return(
            <AuxBox>
                <Burger/>
                <div> Build Controls</div>
            </AuxBox>
        );
    }
}

export default BurgerBuilder;