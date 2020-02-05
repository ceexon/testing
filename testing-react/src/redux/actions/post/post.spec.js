import moxios from 'moxios';

import { fetchPosts } from "../post";
import { testStore } from '../../store';

describe('Get Post Action', () => {

    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    test('Store is correctly updated', () => {
        const expectedState = [
            {
                title: "Title 1",
                body: "Body 1"
            },
            {
                title: "Title 2",
                body: "Body 2"
            },
            {
                title: "Title 3",
                body: "Body 3"
            },
        ];
        const store = testStore();

        moxios.wait(() => {
            const req = moxios.requests.mostRecent();
            req.respondWith({
                status: 200,
                response: expectedState
            })
        });

        return store.dispatch(fetchPosts())
        .then(() => {
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        })
    })
})