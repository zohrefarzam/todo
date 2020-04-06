import React , {Component} from 'react'
import {observer} from 'mobx-react'

@observer
 class TodoItem extends Component {
    handleToggle=()=>
    {
    this.props.todo.toggle()
    }
    render(){
        const {todo} = this.props
        return(
            <li className={todo.completed ? 'completed' : ''}>
            <div className="view">
              <input
              onChange={this.handleToggle()}
              type="checkbox"
              className="toggle"
              value="on"
              checked={todo.completed}
              />
             <label>{todo.title}</label>
             <button className="destry" />
            </div>
            </li>
        )
    }

}
export default TodoItem;