import React from 'react';
import { configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductHunt from './index';
import Header  from './Header/header'
import Footer from './Footer/footer'
import ProductView from './productView/product'
configure({adapter: new Adapter()})

describe('<Header/> <Product/><Footer/>', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<ProductHunt/>);
    })
    //check for header component-->
    it('should render header component',()=>{
        expect(wrapper.find(Header));
    });
    
    it('should render Product component',()=>{
        expect(wrapper.find(ProductView));
    });
    it('should render Footer comonent',()=>{
        expect(wrapper.find(Footer));
    });

});