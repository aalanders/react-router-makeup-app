import React, { Component } from "react";
import "./Product.css";

//import { Route, Link } from "react-router-dom";

//this will show product details
//name, price, image, category,
//colors available, and a description
class Product extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		return (
			<div className="productCard">
				<p>{this.props.name}</p>
				<button onClick={this.props.handleClick}>
					{this.props.price}
				</button>
				<p>
					<img alt="" src={this.props.image_link} />
				</p>
			</div>
		);
	}
}

export default Product;

////<img src={this.props.image_link} />
// onClick = {this.props.addToCart}

// {this.addToCart.bind(this)}

//{this.props.addToCart}

//price={this.props.price}
//name={this.props.name}
