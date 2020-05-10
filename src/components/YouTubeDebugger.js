import React, {Component} from 'react'

export default class YouTubeDebugger extends Component {
   
  constructor() {
     super()
     this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
     }
   }

   handleBit = () => {
     this.setState({
       settings: {
         ...this.state.settings, bitrate: 12
       }
     })
   }

   handleRes = () => {
     this.setState({
       settings: {
         ...this.state.settings, video: {
           resolution: '720p'
         } 
       }
     })
    //  console.log(this.state)
   }

   render() {
     return(
       <div>
        <h3>{this.state.settings.bitrate}</h3>
        <button onClick={this.handleBit} className="bitrate">Change Bitrate</button>
        <h3>{this.state.settings.video.resolution}</h3>
        <button onClick={this.handleRes} className="resolution">Change Resolution</button>
       </div>
     )
   }

}
