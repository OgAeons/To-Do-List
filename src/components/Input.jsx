import React, {useState} from "react"

function Input() {
    const [input, setInput] = useState("")

    function handleChange(event) {
        const {value} = event.target
        setInput(value)
    }

    return (
        <div className="form">
            <input onChange={handleChange} type="text" />
            <button onClick={() => {
                props.addItem(input)
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default Input