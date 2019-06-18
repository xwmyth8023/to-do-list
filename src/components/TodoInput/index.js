import React, { Component, Fragment} from 'react'

export default class TodoInput extends Component {
    render() {
        return (
            <Fragment>
                <input type='text' placeholder='请输入要添加的事项'></input><button>ADD</button>
            </Fragment>
        )
    }
}
