import React, { Component } from "react";
import $ from "jquery";
import "./BrandList.css";
//import { Route, Link } from "react-router-dom";
import Product from "./Product.js";

//will show a specific brand
class BrandList extends Component {
	//do my AJAX call
	constructor(props) {
		super(props);
		this.state = {
			brands: []
		};
	}

	handleClick(i, name, price, e) {
		e.preventDefault();
		this.props.addToCart(name, price);
	}

	componentDidMount() {
		this.makeupRequest();
	}

	componentDidUpdate(prevProps, prevState) {
		if (
			prevState.brands.length &&
			prevState.brands[0].brand !== this.state.brands[0].brand
		) {
			this.makeupRequest();
		}
	}

	makeupRequest() {
		$.ajax({
			method: "GET",
			url: "http://makeup-api.herokuapp.com/api/v1/products.json",
			data: {
				//t: "titanic"
				//makes ?t=titanic
				brand: this.props.match.params.name
			},
			dataType: "json"
		})
			.then(response => {
				this.setState({ brands: response });
			})
			.catch(function(error) {
				console.log(error);
			});
	}

	render() {
		let productInfo = this.state.brands.map((product, i) => {
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
			<div className="titleBrand">
				<h1>{this.props.match.params.name}</h1>
				{productInfo}
			</div>
		);
	}
}

export default BrandList;

//<Route path="/brand/almay" component {Product} />
//inside div above: once click on the object will render
//<Product />
