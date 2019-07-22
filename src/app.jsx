import React, { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div className="flex-container">
				<div className="row">
					<div className="flex-item">
						<Link to="assess" className="cardButton">
							START YOUR CHECK-UP
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
