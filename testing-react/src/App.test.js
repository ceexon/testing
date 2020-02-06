import React from 'react';
import { shallow } from "enzyme";

import { findByTestAttr } from "./utils";
import { testStore } from './redux/store';
import App from './App';

const setup = (initialState={}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive();
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

    it('Should update button state', () => {
        const appInstance = wrapper.instance();
        appInstance.toggleBtn();
        const newState = appInstance.state.btnHidden;
        expect(newState).toBe(true);
    })

    it('Should retur the value passed', () => {
        const appInstance = wrapper.instance();
        const value = appInstance.returnValue("My Value");
        expect(value).toBe("My Value");
    })
})