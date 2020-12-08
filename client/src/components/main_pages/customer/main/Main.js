import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import Dish from "../../../../public/FoodSample.jpg";
import Button from "react-bootstrap/Button";
import "./Main.css";

export default class Main extends React.Component {

  seeMenu = () => {
    this.setState({ redirect: true,pathname: '/Menu' })
    this.renderRedirect();
  }
  renderRedirect = () => {
    if (this.state.redirect) {
        window.location.href = this.state.pathname
    }
}
  componentDidMount() {
    //This would later be changed for the API call with the dishes, we would also add the image to the API i think, that should be small fix in the future
    this.setState({
      popularDishes: [
        {
          dishName: "Patatas",
          chefName: "El mejor",
          restaurant: "Chick fil a",
          rating: 4,
        },
        {
          dishName: "Potatoes",
          chefName: "Dick Cheney",
          restaurant: "MVP",
          rating: 3,
        },
        {
          dishName: "Eggs",
          chefName: "Dick Cheney",
          restaurant: "McBurger",
          rating: 5,
        },
        
      ],
      highestDishes: [
        {
          dishName: "Ketchup",
          chefName: "El mejor",
          restaurant: "Chick fil a",
          rating: 4,
        },
        {
          dishName: "Mayonnaise",
          chefName: "Mac",
          restaurant: "MVP",
          rating: 3,
        },
        {
          dishName: "Eacon",
          chefName: "Tintin",
          restaurant: "McBurger",
          rating: 5,
        },
      ],
    });
  }
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      popularDishes: [],
      highestDishes: [],
    };
  }

  render() {
    return (
      <Container fluid>
        <div className="each-row">
          <h4 className="popDishHeader"> Top 3 Most Popular Dishes </h4>
          <Button id="menu-btn" variant="primary" onClick={this.seeMenu}>
    See Menu
  </Button>
          <Row className="row-resize ">
            {this.state.popularDishes.map((list, index) => (
              <div>
                <Col>
                  <div className="individual-dish">
                    <Image className="dish-surfer" src={Dish} />

                    <div className="dish-info">
                      <h5 className="dish-name">{list.dishName} </h5>
                      <p className="dish-chef"> {list.chefName} </p>

                      {/* This needs to be changed for the library with rating stars */}
                      <p className="dish-rating"> {list.rating} </p>
                      <p className="dish-restaurant"> {list.restaurant} </p>
                    </div>
                  </div>
                </Col>
              </div>
            ))}
          </Row>
        </div>

        <div className="each-row">
          <h4 className="popDishHeader"> Top 3 Highest Rated Dishes </h4>

          <Row className="row-resize ">
            {this.state.highestDishes.map((list, index) => (
              <div>
                <Col>
                  <div className="individual-dish">
                    <Image className="dish-surfer" src={Dish} />

                    <div className="dish-info">
                      <h5 className="dish-name">{list.dishName} </h5>
                      <p className="dish-chef"> {list.chefName} </p>

                      {/* This needs to be changed for the library with rating stars */}
                      <p className="dish-rating"> {list.rating} </p>
                      <p className="dish-restaurant"> {list.restaurant} </p>
                    </div>
                  </div>
                </Col>
              </div>
            ))}
          </Row>
        </div>
        {this.renderRedirect()}
      </Container>
    );
  }
}
