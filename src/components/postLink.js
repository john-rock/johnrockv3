import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <div>
    <Link to={post.frontmatter.path}>
      <h2 className="mb-0">{post.frontmatter.title}</h2>
    </Link>
    <p className="mt-0">{post.frontmatter.description}</p>
  </div>
)

export default PostLink