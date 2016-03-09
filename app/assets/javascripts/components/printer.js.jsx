class Printer extends React.Component {
	
	constructor(){
		super();
		this.state = {
			content: "Que Bola Component"
		}
	}

	updateContent(event){
		this.setState( { content: event.target.value } )
	}





	render(){
		return(
			<div>

			<h1>{ this.state.content }</h1>
			
			<input 
				type="text"
				value= {this.state.content }
				onChange={this.updateContent.bind(this) }
			/>	

			</div>



			)
	}
}