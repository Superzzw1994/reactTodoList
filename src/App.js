import React, { Component } from 'react'
import Item from './Item'
import './index.css'
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '124',
      list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }
  handleChange (e) {
    const value = e.target.value
    this.setState(() => ({
      inputValue: value
    }))
  }
  handleClick () {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
  }
  deleteItem (index) {
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return { list }
    })
  }
  render() { 
    return (
      <div className="App">
        <input type="text" value = {this.state.inputValue} onChange = {this.handleChange}/>
        <button onClick = {this.handleClick}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => {
              return(
                <Item content = {item} index = {index} deleteItem = {this.deleteItem} key = {index}></Item>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
