// users -> an array of objects
const users = (state = [], action) => {
    switch (action.type) {
        // fetch ONE user object
        case 'FETCH_USER':
            // add newly fetched user object to users array
            // action.payload -> user object
            return [...state, action.payload]
        default:
            return state
    }
}

export default users
