import {Component} from 'react'
import './index.css'

class Todo extends Component {
    state = {todoList: []}

    componentDidMount() {
        this.fetchTodoList();
    }

    fetchTodoList = async () => {
        const apiUrl = 'https://gorest.co.in/public/v1/todos';
        const response = await fetch(apiUrl);
        const JsonData = await response.json();
        const {data} = JsonData;
        this.setState({todoList: data})
    }

    render() {
        const {todoList} = this.state;
        return (
            <div className='todo-bg-container'>
                <h1 className='todo-title'>TodoList</h1>
                <ul className='todolist-container'>
                    {todoList.map(todoItem => <li key={todoItem.id}>
                        <div>
                        <p>{todoItem.title}</p>
                        <p>Status : {todoItem.status}</p>
                        </div></li>)}
                </ul>
            </div>
        )
    }
}

export default Todo