import React from 'react'

const CommentList = ({ allcomments }) => {

    console.log(allcomments);

    if (allcomments.length === 0)
        return <h3>No comments</h3>

    return (
        <div>
            <ul>
                {
                    allcomments.map((item, i) => {
                        return <li key={i}>{item.text}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default CommentList