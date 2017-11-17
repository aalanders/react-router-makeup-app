import React, { Component } from "react";
import "./Product.css";

class Product extends Component {
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