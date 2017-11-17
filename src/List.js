import React, { Component } from "react";
import "./List.css";
import { Route, Link } from "react-router-dom";
import BrandList from "./BrandList.js";
import Cart from "./Cart.js";

//this will show list of brands
class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			brands: []
		};
		this.addToCart = this.addToCart.bind(this);
	}

	addToCart(name, price) {
		var newItem = this.state.brands.slice();
		newItem.push({
			name,
			price
		});
		this.setState({ brands: newItem });
	}

	render() {
		//looping to get all the brands
		var brandList = this.props.brands.map((brand, i) => {
			return (
				<div key={i} className="brand">
					<Link to={`/brands/${brand}`}>{brand}</Link>
				</div>
			);
		});
		return (
			<div>
				<h1>Makeup Mega Market</h1>
				<h2>
					<Link to={"/cart"}>My Cart</Link>
				</h2>
				<Route
					path="/cart"
					component={props => (
						<Cart brands={this.state.brands} {...props} />
					)}
				/>
				{brandList}
				<Route
					path="/brands/:name"
					component={props => (
						<BrandList addToCart={this.addToCart} {...props} />
					)}
				/>
			</div>
		);
	}
}

//loops through props creating links for each
//each link makes new route

//that route renders the component

List.defaultProps = {
	brands: [
		"almay",
		"annabelle",
		"benefit",
		"covergirl",
		"dalish",
		"e.l.f.",
		"essie",
		"iman",
		"l'oreal",
		"marcelle",
		"maybelline",
		"milani",
		"mineral fusion",
		"misa",
		"mistura",
		"moov",
		"nyx",
		"orly",
		"pacifica",
		"physicians",
		"formula",
		"anada",
		"revlon",
		"salon",
		"sante",
		"sinful",
		"smashbox",
		"stila",
		"suncoat",
		"zorah"
	]
};

export default List;

//need to put in route what brand they specifically want, right now for anything after brands/
