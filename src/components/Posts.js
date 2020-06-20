import React from 'react'
import { connect } from 'react-redux'

import User from './User'

const Posts = ({ posts }) => {
    return posts.map((post) => (
        <article key={post.id}>
            <h1>{post.title}</h1>
            <User userId={post.userId} />
            <p>{post.body}</p>
        </article>
    ))
}

const mapStateToProps = (state) => ({
    posts: state.posts,
})

export default connect(mapStateToProps)(Posts)
