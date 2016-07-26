var Car = React.createClass({
  render: function() {
    var car = this.props.car;
    return (
      <li id={car.id}>
        <a href="/cars/{car.id}">{car.brand} - {car.model}</a> 
      </li>
    )
  }
})
