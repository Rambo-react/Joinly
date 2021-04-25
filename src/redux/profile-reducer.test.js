import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
    postsData: [
        { id: 1, message: "Hello? how are you?", likesCount: 0 },
        { id: 2, message: "It's my first post.", likesCount: 25 },
        { id: 3, message: "Yo", likesCount: 30 }
    ]
};

it('length of posts should be incremented', () => {
    // 1) test data (initialisation data)
    let action = addPost("RAMBO_REACT");
    
    // 2) action
    let newState = profileReducer(state, action);
    // 3) expectation
    expect(newState.postsData.length).toBe(4);

});

it('message of new post should be correct', () => {
    // 1) test data (initialisation data)
    let action = addPost("RAMBO_REACT");
    // 2) action
    let newState = profileReducer(state, action);
    // 3) expectation
    expect(newState.postsData[3].message).toBe("RAMBO_REACT");


});

it('after deleting length array of posts should be decremented', () => {
    // 1) test data (initialisation data)
    let action = deletePost(1);
    // 2) action
    let newState = profileReducer(state, action);
    // 3) expectation
    expect(newState.postsData.length).toBe(2);
});


it(`if postId incorrect array of posts length shouldn't be decrement`, () => {
    // 1) test data (initialisation data)
    let action = deletePost(1000);
    // 2) action
    let newState = profileReducer(state, action);
    // 3) expectation
    expect(newState.postsData.length).toBe(3);
});