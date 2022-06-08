import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  render() {
    const { active } = this.state;
    const { image } = this.props;

    return (
      <div className="carousel">
        <img src="images[active]" alt="animal" />
        <div className="carousel-smaller">
          
        </div>
      </div>
    )
  }
}

export default Carousel; 