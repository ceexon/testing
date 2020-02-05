import React from 'react';
import { shallow } from "enzyme";
import { checkProps, findByTestAttr } from "../../utils";
import Post from './Post';

describe("Post Component", () => {
    describe('Check Prop Types', () => {
        it('should not throw warning', () => {
            const expectedProps = {
                title: "Post Title",
                body: "This is my body"
            }

            const propsErr = checkProps(Post, expectedProps);
            expect(propsErr).toBeUndefined();
        })
    })

    describe('Renders Post', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                title: "Post Title",
                body: "This is my body"
            }
            wrapper = shallow(<Post {...props} />);
        })

        it('Should render Post without fail', () => {
            const button = findByTestAttr(wrapper, 'Post Component');
            expect(button.length).toBe(1);
        })

        it('Should render Post Title', () => {
            const button = findByTestAttr(wrapper, 'Post Title');
            expect(button.length).toBe(1);
        })

        it('Should render Post Body', () => {
            const button = findByTestAttr(wrapper, 'Post Body');
            expect(button.length).toBe(1);
        })

    })

    describe('Does Not Render Post', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                body: "This is my body"
            }
            wrapper = shallow(<Post {...props} />);
        })

        it('Should not render Post without fail', () => {
            const button = findByTestAttr(wrapper, 'Post Component');
            expect(button.length).toBe(0);
        })

    })
})