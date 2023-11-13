class Hello extends React.Component {
	render() {
		return (
			// Comment the h1 in to see that we can't have multiple top level elements.
			// <h1>This wont work</h1>
			// Instead, multiple h1s are inside of a single top level div.
			<div>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
				<h1>Hello there!</h1>
			</div>
		);
	}
}
// Function component syntax
// function Hello() {
// 	return (
// 		<div>
// 			<h1>Hello there!</h1>
// 			<h1>Hello there!</h1>
// 			<h1>Hello there!</h1>
// 		</div>
// 	)
// }

ReactDOM.render(<Hello />, document.getElementById('root'));
