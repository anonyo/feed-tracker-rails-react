const NewFeed = (props) => {
  return(
    <button type="button" className="btn btn-primary" onClick={ (e) => { props.handleFormSubmit() } }>Submit</button>
  )
}
