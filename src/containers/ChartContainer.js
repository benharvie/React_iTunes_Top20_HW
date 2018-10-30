import React from 'react'
import SongList from '../components/SongList'

class ChartContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      songs: []
    };
  }

  componentDidMount() {
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then(response => response.json())
      .then(charts => this.setState({ songs: charts.feed.entry }))
  }

  render() {
    return (
      <div>
      <h1>Top 20 Charts</h1>
      <SongList songs={this.state.songs} />
      </div>
    )
  }
}
export default ChartContainer
