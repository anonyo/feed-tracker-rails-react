class LastFeed extends React.Component {
  componentDidMount(){
    fetch('/api/v1/last_feed_time.json')
      .then((response) => {return response.json()})
      .then((data) => {
        this.props.addNewFeed(data)
      });
  }

  render(){
    return(
      <h1>last feed was {this.props.data.last_feed.elapsed_time} ago</h1>
    )
  }
}
