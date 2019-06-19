import React, { Component,Fragment } from 'react'
import {TodoHeader,TodoInput,TodoList} from './components'

export default class App extends Component {
    // state = {
    //     title:'待办事项列表'
    // }

    constructor(){
        super()
        this.state = {
            title:'待办事项列表',
            desc:'今日事,今日毕',
            todos:[
                {
                    id:1,
                    title:'吃饭',
                    isCompleted:true
                },
                {
                    id:2,
                    title:'睡觉',
                    isCompleted:false
                },
                {
                    id:3,
                    title:'打豆豆',
                    isCompleted:false
                }
            ]
        }
    }

    render() {
        return (
            <Fragment>
                <TodoHeader desc={this.state.desc}>
                    {this.state.title}
                </TodoHeader>
                <TodoInput btnText="ADD"/>
                <TodoList todos={this.state.todos}/>
            </Fragment>
        )
    }
}
