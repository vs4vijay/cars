var Cars = React.createClass({
  render: function() {
    // debugger
    return (
      // <h2> Cars </h2>
      <ul>
        {this.props.cars.map(function(car) {
          return (<li key={car.id}>{car.model}</li>)
        })}
      </ul>
    )
  }
})
