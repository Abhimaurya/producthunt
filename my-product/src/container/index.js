import Footer from './Footer/footer'
import Header  from './Header/header'
import ProductView from './productView/product'
import React, { Component } from 'react';

class ProductHunt extends Component {

    constructor(props){
        super(props)
        this.state={
            visible:false,
        }
    }

    render(){
        return(
            <React.Fragment>
                {/* Header section */}
                <Header/>
                {/* Product view section */}
                <ProductView visible={this.state.visible} visible={this.callback}/>
                {/* Footer section */}
                <Footer/>
            </React.Fragment>
        
         ) }
}

export default ProductHunt;