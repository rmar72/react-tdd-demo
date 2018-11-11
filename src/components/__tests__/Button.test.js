import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe("Button", () => {
    let mountedButton;

    beforeEach( () => {
        mountedButton = shallow(<Button />);
    });

    it('renders without crashing', () => {
        shallow(<Button />);
    });

    it('renders a button', () => {
        const button = mountedButton.find('button');
        expect(button.length).toBe(1);
    });

    it("onClick event invokes a fn passed to it by parent through props", () => {
        // mock fn
        const mockCallBack = jest.fn();
        const mountedButtonWithCallback = shallow(<Button handleClick={mockCallBack} />); // we pass in the 'prop' handleClick
        mountedButtonWithCallback.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
    });

});

describe("When a location is passed to it", () => {
    let mountedButton;
    let props;

    beforeEach(()=>{
        props = {
            location: "Henderson"
        };
        mountedButton = shallow(<Button {...props} />);
    });

    it("displays the location", () => {
        const locationName = mountedButton.find(".location-button");
        expect(locationName.text()).toEqual("Henderson");
    });
});

describe("When a location is passed to it", () => {
    let mountedButton;
    let props;

    beforeEach( () => {
        props = {
            location: "Boulder"
        };
        mountedButton = shallow(<Button {...props} />);
    });

    it("displays the location", () => {
        const locationName = mountedButton.find(".location-button");
        expect(locationName.text()).toEqual("Boulder");
    });
});

describe("When no location is passed to it", () => {
    let mountedButton;
    let props;

    beforeEach( () => {
        props = {
            location: undefined
        };
        mountedButton = shallow(<Button {...props} />);
    });

    it("displays the location", () => {
        const locationName = mountedButton.find(".location-button");
        expect(locationName.text()).toEqual("All Locations");
    });
});
