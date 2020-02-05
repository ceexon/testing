import React from 'react';
import { shallow } from "enzyme";

import { findByTestAttr } from "./utils";
import { testStore } from './redux/store';
import App from './App';

const setup = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
    console.log(wrapper.debug());
    return wrapper;
}

describe('App Component', () => {
    let wrapper;

    beforeEach(() => {
        const initialState = {
            posts: [
            {
                title: "Title 1",
                body: "Body 1"
            }
        ]}
        wrapper = setup(initialState);
    })

    it('should render without error', () => {
        const app = findByTestAttr(wrapper, 'App Component');
        expect(app.length).toEqual(1);
    })
})