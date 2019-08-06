
import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            item: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ item: ''});
        this.props.addItem(event, this.state.item)
    }
    render(){
        return(
            <div className="taskForm">
            <form onSubmit={this.handleSubmit}>
                
                <input 
                    placeholder="What's on your agenda?"
                    type="text"
                    name="item"
                    value={this.state.item}
                    onChange={this.handleChange}
                />

            </form>
        
         <button onClick={this.handleSubmit}>Add Todo</button>

    <button className="clear-btn" onClick={this.props.clearCompleted}>Clear Completed</button>
            
            </div>
        )        
    }
}

export default TodoForm;