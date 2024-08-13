// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {eachItem} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = eachItem
  return (
    <li className="repository-item-container">
      <img src={avatarUrl} alt={name} className="avatar-img" />
      <h1 className="project-title">{name}</h1>
      <div className="project-discrition-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="dis-image"
        />
        <p className="project-discrition">{`${starsCount} starts`}</p>
      </div>
      <div className="project-discrition-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="dis-image"
        />
        <p className="project-discrition">{`${forksCount} forks`}</p>
      </div>
      <div className="project-discrition-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="dis-image"
        />
        <p className="project-discrition">{`${issuesCount} open issues`}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
