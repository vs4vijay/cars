var Cars = React.createClass({
  render: function() {
    var renderCar = (car) => <Car key={car.id} inline={true} car={car} />;
    return (
      <div id="cars">
        <h2> Cars </h2>
        <User />
        <NewCar />
        <ul>
          {this.props.cars.map(renderCar)}
        </ul>
      </div>
    )
  }
})
