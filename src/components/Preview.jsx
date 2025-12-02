import React from 'react';
import {marked} from 'marked';

export default class Preview extends React.Component {
    render() {
        console.log('clicked', this.props.input);
        return(
            <div 
                id="preview"
                className="body-container"
                dangerouslySetInnerHTML={{__html: marked(this.props.input)}}
            >
            </div>
        );
    }
}