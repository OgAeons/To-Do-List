import React, {useState} from "react"
import ToDo from "./ToDo"
import Input from "./Input"

function App() {
    const [items, setItems] = useState([])

    function addItem(input, setInput) {
        setItems(prevItems => {
            return [...prevItems, input]
        })
        setInput("")
    }

    function deleteItem(id) {
        setItems(prevItems => {
            return prevItems.filter((item, index) => {
                return index !== id
            })
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
                    {items.map((item, index) => (
                        <ToDo
                            key={index}
                            id={index}
                            text={item}
                            delete={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}


export default App;