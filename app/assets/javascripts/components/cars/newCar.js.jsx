var NewCar = React.createClass({
  render: function() {
    return (
      <div className="car">
        <div> Brand: <input type="text" name="brand" /> </div>
        <div> Model: <input type="text" name="model" /> </div>
        <div> Price: <input type="text" name="price" /> </div>
        <input type="button" value="add" />
        <input type="reset" value="clear" />
      </div>
    )
  }
})
