import React from 'react';

class TodoForm extends React.Component{

    constructor(){
        super()
        this.state = {
            listName: ''
        }
    }

    handleChange = e => {
        this.setState({
            listName: e.target.value
        })
    }


    handleSubmit = e => {
        e.preventDefault()
        this.props.addList(this.state.listName)
        this.setState({listName: ''})
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    placeholder='List item'
                    name='list'
                    className='input'
                    onChange={this.handleChange}
                    value={this.state.listName}
                    />
                    <button type='submit' className='add'>Add</button>
                </form>
                    <button type='submit' className='waring' onClick={this.props.cleanCheckIteam}>Clean Checked items</button>
            </div>
        )
    }
}

export default TodoForm