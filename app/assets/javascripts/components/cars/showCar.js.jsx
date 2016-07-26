var ShowCar = React.createClass({
  render: function() {
    var car = this.props.car;
    var back = (<div><a href="/cars"> Back </a></div>);
    return (
      <div className="car">
        <div> Id: {car.id} </div>
        <div> Brand: {car.brand} </div>
        <div> Model: {car.model} </div>
        <div> Price: {car.price} </div>
        {back}
      </div>
    )
  }
})
