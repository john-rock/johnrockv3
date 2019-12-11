import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <p>{post.frontmatter.title}</p>
    </Link>
  </div>
)

export default PostLink