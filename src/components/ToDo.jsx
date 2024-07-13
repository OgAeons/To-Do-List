import React from "react"

function ToDo(props) {
    return (
        <div onClick={() => {
            props.delete(props.id)
        }}>
            <li>{props.text}</li>
        </div>
    )
}

export default ToDo