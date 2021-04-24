import React from 'react';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '# Marked in Node.js\n\nRendered by **marked**.'
        };
    }

    componentDidMount() {
        const { input } = this.state;
        if(input.length > 0) {
            this.props.updateInput(input);
        }
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        });
        this.props.updateInput(event.target.value);
    }

    render() {
        return(
            <div className="body-container">
                <textarea 
                    id="editor"
                    onChange={this.handleInput}
                    value={this.state.input}
                >
                </textarea>
            </div>
        );
    }
}