import React from 'react'
import { connect } from 'react-redux'

import { fetchPostsThenEachUser } from '../actions'
import Posts from './Posts'

const App = ({ fetchPostsThenEachUser }) => {
    return (
        <div>
            <button onClick={fetchPostsThenEachUser}>Fetch posts</button>
            <Posts />
        </div>
    )
}

const mapDispatchToProps = {
    fetchPostsThenEachUser,
}

export default connect(null, mapDispatchToProps)(App)
