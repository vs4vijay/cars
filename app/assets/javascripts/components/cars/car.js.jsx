var Car = React.createClass({
  render: function() {
    var car = this.props.car;
    var inlineCar = (
      <li id={car.id}>
        <a href={"/cars/" + car.id}>{car.brand} - {car.model}</a>
      </li>
    );
    if(this.props.inline) {
      return inlineCar;
    } else {
      return <ShowCar car={car} />;
    }
  }
})
