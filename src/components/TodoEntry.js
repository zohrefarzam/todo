import React , {Component} from 'react'
import TodoStore from '../stores/TodoStore'

export default class TodoEntry extends Component {
    state={
     value:''
    }
handleClick= event=>{
    if(event.keyCode!==13){
        return;
    }
    event.preventDefault()
    TodoStore.addTodo(this.state.value)
    this.setState({
        value:''
    })
}
    render(){
        return(
            <header className="header">
            <h1>todo</h1>
            <input
            value={this.state.value}
            onChange={event => this.setState({value:event.target.value})}
            onKeyDown={
                event=> this.handleClick(event)
            }
            type="text"
            className="new-todo"
            placeholder="what do u need?" />
            </header>
        )
    }

}