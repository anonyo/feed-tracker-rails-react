class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      last_feed: {}
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewFeed = this.addNewFeed.bind(this);
  }

  handleFormSubmit(){
    fetch('http://localhost:3000/api/v1/feeds', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }).then((response) => {return response.json()})
    .then((feed) => {
      this.addNewFeed(feed)
    })
  }

  addNewFeed(feed) {
    this.setState({ last_feed: feed })
  }

  render() {
    return(
      <div>
        <h1>Track your feeds</h1>
        <LastFeed data={this.state} addNewFeed={this.addNewFeed} />
        <NewFeed handleFormSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}
