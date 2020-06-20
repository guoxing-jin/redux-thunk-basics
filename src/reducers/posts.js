// posts -> an array of objects
const posts = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            // action.payload -> posts array
            return action.payload
        default:
            return state
    }
}

export default posts
