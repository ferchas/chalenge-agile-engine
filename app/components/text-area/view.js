import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Textarea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.refTextArea = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleFormat = this.handleFormat.bind(this);
    this.handleSelectText = this.handleSelectText.bind(this);
  }

  handleChange(event) {
    console.log('---',event,  event.target.value);
    this.setState({ text: event.target.value });
  }

  handleFormat(eClass) {
    console.log( this.refTextArea.current.innerHTML);
    if( this.textSelected && this.textSelected != '') {
      const textDecorate = `<span class="${eClass}">${this.textSelected}</span>`;
      const textReset = this.refTextArea.current.innerHTML.replace(this.textSelected, textDecorate);
      this.setState({ text: textReset });
      this.textSelected = '';
    }
  }

  handleSelectText() {
    if( window.getSelection().toString() != '') {
      this. textSelected = window.getSelection().toString();
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps);
  }
  
  render() {
    const { title = 'Text area Title', text = '' } = this.state;
    return (
      <div className="text-area-container">
        <p className="tilte">{title}</p>
        <div
          contentEditable={true}
          className="text-area"
          ref={this.refTextArea} 
          onChange={this.handleChange}
          onSelect={this.handleSelectText}
          dangerouslySetInnerHTML={{__html: text}}
        />
        <div className="text-area-action">
          <div  className="action bold" onClick={() => this.handleFormat('bold')}> <span>B</span></div>
          <div  className="action italic" onClick={() => this.handleFormat('italic')}><span>I</span></div>
          <div  className="action underline" onClick={() => this.handleFormat('underline')}><span>U</span></div>
        </div>
      </div>
    );
  }
}

Textarea.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};

Textarea.defaultProps = {};

export default Textarea;

