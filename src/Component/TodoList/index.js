import {Component} from 'react'
import {v4} from 'uuid'

import TodoItem from '../TodoItem'

import "./index.css"

class Todolist extends Component{
  state={task:'',taskList:[]}

  onChangeTask=(event)=>{
    this.setState({task:event.target.value})
  }
  
  onAddtask=(event)=>{
    event.preventDefault()
    const {task}=this.state
    const isNumeric = (number) =>{
      let result=''
      if ((typeof(number)==="number") && (number>1)){
        result = parseInt(number)
      }
      else if ((number===1) || (number===0)){
        result = 1
      }
      return result
    }

    const stringsResult = (count,number,lastItem)=>{
      let result1;
      if ((count===1) && (typeof(lastItem==="string"))){
        result1=stringArray.slice(0,stringArray.length)
      }
      else if ((count>1) && (parseInt(lastItem)>1)){
        result1=stringArray.slice(0,stringArray.length-1)
      }
      return result1
    }

    let stringArray = task.split(" ")
    let lastItem = stringArray[stringArray.length-1]
    
    let number = stringArray[stringArray.length-1]

    const GettingCount = (ExistingNumber)=>{
      let result2=''
      if ((ExistingNumber==='') || (ExistingNumber===0) || (ExistingNumber===1)){
        result2=1

      }
      else if (ExistingNumber>1){
        result2=ExistingNumber
      }
      return result2

    }

    console.log("number is",number)
    let ExistingNumber = isNumeric(parseInt(number))
    //console.log("ExistingNumber is ", ExistingNumber)
    //console.log("result of Existing number",ExistingNumber==='')
    
    let count = GettingCount(ExistingNumber)
    //console.log("count is",count)
    
    let stringsActualResult = stringsResult(count,number,lastItem)
    let fullString =stringsActualResult.join(" ")
    //console.log("full string is",fullString)
    let lastnumber = parseInt(fullString[fullString.length-1])
    let Actualfullstring;
    
    if (lastnumber<=1){
      let newArray1=fullString.split(" ")
      newArray1.pop()
      Actualfullstring=newArray1.join(" ")
    }
    else{
      Actualfullstring=fullString
    }

    //console.log("ActualfullString is",Actualfullstring)
    //console.log("count is",count)
    let newTaskList = []
    for (let i=0;i<count;i++){
      let newTask={
        id:v4(),
        taskName:Actualfullstring
      }
      newTaskList.push(newTask)
    }
    //console.log("newTaskList is", newTaskList)
    this.setState(prevState=>({taskList:[...prevState.taskList,...newTaskList],task:'',noOfTimes:''}))
  }

  onClickDeleteButton=(id)=>{
    const {taskList} = this.state 
    this.setState({taskList:taskList.filter(eachItem=>eachItem.id!==id)})
  }

  
  render(){
    const {task,taskList}=this.state
    //console.log(taskList)
    //console.log(taskList.length)
    return(
      <div className="Todo-App-main-container">
        <h1 className="Todo-App-heading">Day Goals!</h1>
        <form onSubmit={this.onAddtask} className="Todo-App-sub-container">
          <input type="text" className="input-style1" onChange={this.onChangeTask} value={task}/>
          <div>
          <button type="submit" className="Add-button">Add Todo</button>
          </div>
          <ul className="elements-container">
              {taskList.map(eachTask => (
                <TodoItem
                  key={eachTask.id}
                  taskDetails={eachTask}
                  onClickDeleteButton={this.onClickDeleteButton}
                />
              ))}
            </ul>
        </form>
      </div>
    )
  }
}

export default Todolist