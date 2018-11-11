import React from 'react';
import { shallow } from 'enzyme';
import Map from '../Map';


describe("Map", ()=> {
    let mountedMap, props;

    beforeEach( () => {
        props = {
            location: undefined,
            imagename: 'testmap.png'
        }
        mountedMap = shallow(<Map {...props} />); // map with props
    });

    it('renders without crashing', () => {
        shallow(<Map />);
    });

    it('contains a image', () => {
        const img = mountedMap.find("img");
        expect(img.length).toBe(1);
    });

    it("displays the default map when no props are given", () => {
        let defaultMap = shallow(<Map />); // note the Map with no props vs the top one that does
        const defaultImage = defaultMap.find('img[src="images/default.png"]');
        expect(defaultImage.length).toBe(1);
    });

    it("displays the map imagename prop passed to it", () => {
        const testMap = mountedMap.find('img[src="images/testmap.png"]');
        expect(testMap.length).toBe(1);
    });

});

