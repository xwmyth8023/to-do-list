import React, { Component } from 'react'

export default class TodoItem extends Component {

    handleSlectTodo = () => {
        // console.log('changed')
        this.props.onSelectTodoItem && this.props.onSelectTodoItem(this.props.id)
    }
    shouldComponentUpdate (nextProps,nextState) {
        return nextProps.completed !== this.props.completed
    }
    render() {
        console.log(`Todoitem ${this.props.title} rendered`)
        return (
            <li>
                <input 
                    type='checkbox'
                    checked={this.props.completed}
                    onChange={this.handleSlectTodo}
                />
                {this.props.title} {this.props.completed ? '已完成' : '未完成'}
            </li>
        )
    }
}
