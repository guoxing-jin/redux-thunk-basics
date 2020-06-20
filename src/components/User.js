import React from 'react'
import { connect } from 'react-redux'

const User = ({ user }) => {
    // props.user is undefined when User component first renders
    // due to asynchronous fetching
    // users state hasn't been populated yet
    return (
        <>{!user ? <span>Loading username...</span> : <h3>{user.name}</h3>}</>
    )
}

const mapStateToProps = (state, ownProps) => {
    // use ownProps.userId to find the target user object
    // then pass the target user object as a prop through connect
    return { user: state.users.find((user) => user.id === ownProps.userId) }
}

export default connect(mapStateToProps)(User)
