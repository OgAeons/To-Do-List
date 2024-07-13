import React, {useState} from "react"
import Input from "./Input"

function App() {
    const [items, setItems] = useState([])

    function addItem(input) {
        setItems(prevItems => {
            return [...prevItems, input]
        })
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <Input addItem={addItem} />
            <div>
                <ul>
                    {items.map(item => (
                        <ToDo
                            text={item}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default App;