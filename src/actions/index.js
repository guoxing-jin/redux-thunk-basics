import axios from 'axios'
import _ from 'lodash'

// dispatch is passed in by redux thunk
const fetchPosts = () => async (dispatch) => {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
    )

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

const fetchUser = (id) => async (dispatch) => {
    const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
    )

    dispatch({ type: 'FETCH_USER', payload: response.data })
}

// avoid redundant network requests for the same user
const fetchPostsThenEachUser = () => async (dispatch, getState) => {
    // redux thunk handles the returned async function
    // wait for populating posts state finishes
    // then fetch user objects
    await dispatch(fetchPosts())

    const uniqueUsers = _.chain(getState().posts).map('userId').uniq().value()

    // fetching user objects in parallel
    async function getUsersState() {
        await Promise.all(
            uniqueUsers.map(async (userId) => {
                await dispatch(fetchUser(userId))
            })
        )
    }

    getUsersState()

    // check out the effect of await
    // await getUsersState()
    // console.log(getState())
}

export { fetchPosts, fetchUser, fetchPostsThenEachUser }
