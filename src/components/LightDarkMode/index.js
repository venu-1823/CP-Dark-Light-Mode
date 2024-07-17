import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {bg: 'toggle-contianer-white', buttonName: 'Light'}
  onClickbutton = () => {
    this.state.bg != 'toggle-contianer-white'
      ? this.setState(prevState => ({
          bg: 'toggle-contianer-white',
          buttonName: 'Light',
        }))
      : this.setState(prevState => ({
          bg: 'toggle-contianer-black',
          buttonName: 'Dark',
        }))
  }

  render() {
    const {bg, buttonName} = this.state
    return (
      <div className="bg-container">
        <div className={bg}>
          <h1>Click To Change Mode</h1>
          <button onClick={this.onClickbutton}>{buttonName} Mode</button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
