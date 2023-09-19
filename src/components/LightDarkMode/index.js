// Write your code here
import './index.css'
import {Component} from 'react'

class LightDarkMode extends Component {
  state = {isClicked: true}

  onButtonClick = () => {
    const {isClicked} = this.state

    if (isClicked === true) {
      this.setState({
        isClicked: false,
      })
    } else {
      this.setState({
        isClicked: true,
      })
    }
  }

  render() {
    const {isClicked} = this.state

    return (
      <div className="bg-conatainer">
        {isClicked && (
          <div className="card-container-dark">
            <h1 className="heading-dark">Click To Change Mode</h1>
            <button
              className="button-dark"
              type="button"
              onClick={this.onButtonClick}
            >
              Light Mode
            </button>
          </div>
        )}

        {!isClicked && (
          <div className="card-container-light">
            <h1 className="heading-light">Click To Change Mode</h1>
            <button
              className="button-light"
              type="button"
              onClick={this.onButtonClick}
            >
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
