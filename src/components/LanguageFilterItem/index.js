// Write your code here
import {Component} from 'react'
import './index.css'

class LangaugeFiterItem extends Component {
  updatedTheId = () => {
    const {eachItem, changeFilterId} = this.props
    const {id} = eachItem
    changeFilterId(id)
  }

  geetingButtons = () => {
    const {eachItem, isActive} = this.props
    const {language} = eachItem
    const clickedClass = isActive ? 'clcked-class' : ''
    return (
      <li>
        <button
          className={`button-element ${clickedClass}`}
          type="button"
          onClick={this.updatedTheId}
        >
          {language}
        </button>
      </li>
    )
  }

  render() {
    return <>{this.geetingButtons()}</>
  }
}

export default LangaugeFiterItem
