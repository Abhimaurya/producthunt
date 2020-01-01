import Footer from './Footer/footer'
import Header  from './Header/header'
import ProductView from './productView/product'
// import LikeSection from './productView/LikeSection'
// import LikeList from './LikeList/Like'
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
                <Header/>
                <ProductView visible={this.state.visible} visible={this.callback}/>
                {/* <LikeSection/>
                <LikeList/> */}
                <Footer/>
            </React.Fragment>
        
         ) }
}

export default ProductHunt;