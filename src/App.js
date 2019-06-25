import React, { Component,Fragment } from 'react'
import {TodoHeader,TodoInput,TodoList,Like} from './components'
import { getTodos } from './server'
import { PassThrough } from 'stream';

export default class App extends Component {

    constructor(){
        super()
        this.state = {
            title:'待办事项列表',
            desc:'今日事,今日毕',
            todos:[]
        }
    }

    onSelectTodoItem = (id) => {
        // console.log('comlete select')
        this.setState((prevState) => {
            return {
                todos: prevState.todos.map(todo => {
                    
                    if(todo.id === id){
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            }
        })
    }

    componentDidMount () {
        getTodos()
            .then(resp => {
                console.log(resp)
                if (resp.status===200) {
                    this.setState({
                        todos:resp.data
                    })
                }else{
                    //
                }
            })
            .catch(err =>{
                console.log(err)
            })
            .finally(()=>{
                //
            })
    }

    addTodo = (todoTitle) => {
        this.setState({
            todos:this.state.todos.concat({
                id:Math.random(),
                title: todoTitle,
                completed: false

            })
        })
    }
    render() {
        return (
            <Fragment>
                <TodoHeader desc={this.state.desc}>
                    {this.state.title}
                </TodoHeader>
                <TodoInput addTodo={this.addTodo}/>
                <TodoList todos={this.state.todos} onSelectTodoItem={this.onSelectTodoItem}/>
                <Like />
            </Fragment>
        )
    }
}
