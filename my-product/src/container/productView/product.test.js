import Calendar from 'react-calendar';
import React from 'react';
import { configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductView from '../productView/product';
//import Calendar from 'react-calendar';
configure({adapter: new Adapter()})
describe('<Header/> <Product/><Footer/>', ()=>{
    let wrapper;
    beforeEach(()=>{
        wrapper = shallow(<ProductView/>);
    })
    //check for calender component-->
    it('should render header component',()=>{
        expect(wrapper.find(<Calendar onChange></Calendar>));
    });

});
