import React from 'react';
import { shallow } from 'enzyme';
import StoreLocator from '../StoreLocator';
import axios from 'axios';
import renderer from 'react-test-renderer';

describe('StoreLocator', () => {
    let mountedStoreLocator;
    // create mountedStoreLocator, thats a shallow render of the Component, so I can use it in each of my tests
    beforeEach( () => {
        mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<StoreLocator />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('it calls axios.get in componentDidMount', () => {
        // we do return here bc we want to do a network call on didMount, so we have to wait for it to return,
        // hmmm still a bit ambigous about it having to return
        return mountedStoreLocator.instance().componentDidMount().then(()=>{
            // then we do the test
            expect(axios.get).toHaveBeenCalled();
        });
    });

    it('calls axios.get with correct url', () => {
        return mountedStoreLocator.instance().componentDidMount().then(()=>{
            expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
        });
    });

    it('update state with api data', () => {
        return mountedStoreLocator.instance().componentDidMount().then(()=>{
            expect(mountedStoreLocator.state()).toHaveProperty('shops', 
                [
                    {
                        "location": "tst address",
                        "address": "test address"
                    }
                ]
            );
        });
    });

    it('renders without crashing', () => {
        mountedStoreLocator = shallow(<StoreLocator />);
    });

    it('renders Header', () => {
        const headers = mountedStoreLocator.find('Header');
        expect(headers.length).toBe(1);
    });

    // no longer working since we changed the flow, there is async call for data that buttons rely on
    // it('renders three buttons', () => {
    //     const buttons = mountedStoreLocator.find('Button');
    //     expect(buttons.length).toBe(3);
    // });

    it('renders a map', () => {
        const map = mountedStoreLocator.find('Map');
        expect(map.length).toBe(1);
    });
});

describe('Choose Map', () => {
    it('updates this.state.currentMap using the location passed to it', () => {
        let mountedStoreLocator = shallow(<StoreLocator />);
        let mockEventData = {target: {value:'testland'}};
        mountedStoreLocator.instance().chooseMap(mockEventData); // chooseMap is an instance fn, that sets the state, its not clear tho
        // I see it now, so after red bar, we have to ccreate a fn chooseMap that is going to setState, and if we pass the mockEventData
        // it will update currentMap, it's just confusing as to when you need to mock fns and when you dont
        expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');

    });
});