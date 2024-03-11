import './index.css'


const TodoItem = (props) =>{
    const {taskDetails,onClickDeleteButton}=props
    const {taskName,id} = taskDetails
    const onClickButton=()=>{
        onClickDeleteButton(id)
    }
    
    return(
        <li className="list-style">
        <div className="Todo-Item-container">
            <div>
            <p className="Todo-paragraph">{taskName}<br/></p>
            </div>
            <div>
            <button type="button" onClick={onClickButton}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfOm3xvV8vOchBwGlXKQ5Wa9LzPOZb9V4t6kCHvZakbA&s" alt={taskName} className="img-style"/>
            </button>
            </div>
        </div>
        </li>

    )
}

export default TodoItem