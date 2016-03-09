class CommentBox extends React.Component {
	constructor(){
		super();
		this.state={
			comments: [
				{user: "jalexy@gmail.com", content: "This is so cool"},
				{user: "faraz@gmail.com", content: "I like soccer"},
				{user: "Mat", content: "This is so frustrating"}
			]
		}
	}

	addComment(userInput){
		var comment = { user: "Anonymous", content: userInput }
		var comments = this.state.comments
		comments.push(comment);
		this.setState({ comments: comments })

	}


	render(){
		return(
			<div className="comment-wrapper">
			<CommentList comments={ this.state.comments } />
			<CommentForm onCommentAdd={this.addComment.bind(this)} />
			</div>
			)
	}
}