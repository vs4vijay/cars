var Cars = React.createClass({
  render: function() {
    return (
      <div id="cars">
        <h2> Cars </h2>
        <ul>
          {this.props.cars.map(function(car) {
            return <Car key={car.id} car={car} />
          })}
        </ul>
      </div>
    )
  }
})
