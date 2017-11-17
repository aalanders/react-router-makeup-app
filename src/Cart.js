//list items in cart, can reuse Product??
//will affect it's own state?

import React, { Component } from "react";
import Product from "./Product";

class Cart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			brands: []
		};
	}
	//can loop through state and render each product from state

	render() {
		// var display = this.state.brands.map((product, i) => {
		// 	<Product key={i} name={this.product.name} />;
		// });

		let display = this.state.brands.map((product, i) => {
			return (
				<Product
					key={i}
					name={product.name}
					price={product.price}
					description={product.description}
					image_link={product.image_link}
					handleClick={this.handleClick.bind(
						this,
						i,
						product.name,
						product.price
					)}
				/>
			);
		});

		return (
			<div className="cart">
				<h1>Cart Items</h1>
				{display}
			</div>
		);
	}
}

export default Cart;
