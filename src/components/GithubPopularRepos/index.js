import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LangaugeFiterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]
// Write your code here
const stateOfPage = {
  initial: 'INITAL',
  success: 'SUCCESS',
  fail: 'FAIL',
}
class GithubPopularRepos extends Component {
  state = {
    filterId: languageFiltersData[0].id,
    projectList: [],
    stateIs: stateOfPage.initial,
  }

  componentDidMount() {
    this.gettingGitProduct()
  }

  gettingGitProduct = async () => {
    this.setState({stateIs: stateOfPage.initial})
    const {filterId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${filterId}`
    const response = await fetch(apiUrl)
    const data = await response.json()
    if (response.ok === true) {
      const prevData = data.popular_repos
      console.log(prevData)
      const updatedData = prevData.map(eachItem => ({
        name: eachItem.name,
        id: eachItem.id,
        issuesCount: eachItem.issues_count,
        forksCount: eachItem.forks_count,
        starsCount: eachItem.stars_count,
        avatarUrl: eachItem.avatar_url,
      }))
      this.setState({
        projectList: updatedData,
        stateIs: stateOfPage.success,
      })
    } else {
      this.setState({stateIs: stateOfPage.fail})
    }
  }

  changeFilterId = filterId => {
    this.setState({filterId}, this.gettingGitProduct)
  }

  gettingProjects = () => {
    const {projectList} = this.state
    return (
      <ul className="project-list-container">
        {projectList.map(eachItem => (
          <RepositoryItem eachItem={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  gettingLangauageButton = () => {
    const {filterId} = this.state
    return (
      <ul className="git-hub-list-container">
        {languageFiltersData.map(eachItem => (
          <LangaugeFiterItem
            eachItem={eachItem}
            key={eachItem.id}
            changeFilterId={this.changeFilterId}
            isActive={eachItem.id === filterId}
            filterId={filterId}
          />
        ))}
      </ul>
    )
  }

  gettingFail = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-img"
      />
    </div>
  )

  loaderFunc = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  gettingAllDetails = () => {
    const {stateIs} = this.state
    switch (stateIs) {
      case stateOfPage.initial:
        return this.loaderFunc()
      case stateOfPage.success:
        return this.gettingProjects()
      case stateOfPage.fail:
        return this.gettingFail()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="git-hub-container">
        <h1 className="git-hub-heading">Popular</h1>
        {this.gettingLangauageButton()}
        {this.gettingAllDetails()}
      </div>
    )
  }
}

export default GithubPopularRepos
