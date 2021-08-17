import React from "react"

const Comment = React.forwardRef((props, commentBox) => {
  return <div ref={commentBox} />
})

export default Comment