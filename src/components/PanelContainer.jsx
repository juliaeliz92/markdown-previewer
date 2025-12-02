import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

const actions = {
    maximize: 'maximize',
    minimize: 'minimize'
}

export class PanelContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panelAction: "",
        };
    }

    setInput = (input) => {
        this.props.setInput(input);
    }

    render() {
        const { panelAction } = this.state;
        const { title, input } = this.props;
        return(
            <div id={title} className={`panel-container ${panelAction}-panel`}>
              <header className="panel-header">
                {title}
                <i 
                    className={`fa fa-fw panel-button ${panelAction === actions.maximize ? 'fa-window-minimize' : 'fa-window-restore'}`} 
                    aria-hidden="true"
                    onClick={this.onClickPanelButton}
                >
                </i>
              </header>
              {title === "Editor" ? 
                <Editor updateInput={this.setInput}/> : 
                <Preview input={input} />
              }  
            </div>
        )
    }

    onClickPanelButton = () => {
        const panelAction = this.state.panelAction === actions.maximize ? actions.minimize : actions.maximize;
        this.setState({panelAction});
        document.getElementById(this.props.title).scrollIntoView();
    }
}