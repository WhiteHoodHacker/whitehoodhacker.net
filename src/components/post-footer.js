import React from "react"
import useDarkMode from "use-dark-mode"
import Comment from "./comment"

const PostFooter = () => {
    const darkMode = useDarkMode(true)
    const commentBox = React.createRef()
    React.useEffect(() => {
        const commentScript = document.createElement("script")
        const commentsTheme = darkMode.value ? "github-dark" : "github-light"
        commentScript.async = true
        commentScript.src = "https://utteranc.es/client.js"
        commentScript.setAttribute("repo", "WhiteHoodHacker/whitehoodhacker.net")
        commentScript.setAttribute("issue-term", "pathname")
        commentScript.setAttribute("id", "utterances")
        commentScript.setAttribute("label", "comment")
        commentScript.setAttribute("theme", commentsTheme)
        commentScript.setAttribute("crossorigin", "anonymous")
        if (commentBox && commentBox.current) {
            commentBox.current.appendChild(commentScript)
        } else {
            console.log(`Error adding utterances comments on: ${commentBox}`)
        }
        const removeScript = () => {
            commentScript.remove()
            document.querySelectorAll(".utterances").forEach(el => el.remove())
        }
        return () => {
            removeScript()
        }
    }, [commentBox, darkMode])
    return (
        <React.Fragment>
            <Comment ref={commentBox} />
            <hr />
        </React.Fragment>
    )
}

export default PostFooter