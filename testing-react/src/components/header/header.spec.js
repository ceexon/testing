import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

import {findByTestAttr} from '../../utils';

const setUp = (props={}) => {
    const component = shallow(<Header {...props} />);
    return component;
}

describe('Header Component', () => {
    let header;

    beforeEach(() => {
        header = setUp();
    });

    it("Should render without fail", () => {
        const rendered = findByTestAttr(header, "Header Component");
        expect(rendered.length).toEqual(1);
    });
   
    it("Should render a logo", () => {
      const logo = findByTestAttr(header, 'Logo');
      expect(logo.length).toBe(1);
    });
})