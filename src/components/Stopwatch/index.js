// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  constructor(props) {
    super(props)
    this.state = {countDown: 0}
  }

  onStart = () => {
    clearInterval(this.counterId)
    this.counterId = setInterval(() => {
      this.setState(prevState => ({countDown: prevState.countDown + 1}))
    }, 600)
  }

  onStop = () => {
    console.log('im working')
    clearInterval(this.counterId)
  }

  onRestart = () => {
    clearInterval(this.counterId)
    this.setState({countDown: 0})
  }

  render() {
    const {countDown} = this.state
    const min = Math.floor(countDown / 60)
    const sec = countDown < 60 ? countDown : Math.floor(countDown - min * 60)

    return (
      <div className="stopWatch">
        <h1>Stopwatch</h1>
        <div className="watch-card">
          <div className="image-tab">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <p>Timer</p>
          </div>
          <h1>
            {min < 10 ? 0 : null}
            {min}:{sec < 10 ? 0 : null}
            {sec}
          </h1>

          <button className="start-button" type="button" onClick={this.onStart}>
            Start
          </button>
          <button className="stop-button" type="button" onClick={this.onStop}>
            Stop
          </button>
          <button
            className="restart-button"
            type="button"
            onClick={this.onRestart}
          >
            Reset
          </button>
        </div>
      </div>
    )
  }
}

export default Stopwatch
