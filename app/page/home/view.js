import React, { Component } from "react";
import { hydrate } from "react-dom"

import Layout from '../../components/layout';
import TextArea from '../../components/text-area';

import './style.css';

class Home extends Component {
  constructor(props) {
    super(props);
    
    this.goto = this.goto.bind(this);
  }

  goto(href) {
    window.location.replace(href);
  }

  render() {
    return (
      <Layout layoutData={this.props.layout} >
         <div className="services-page">
          <TextArea />
         </div>
      </Layout>
    );
  }
}

if (typeof window !== 'undefined') {
  hydrate(<Home {...window.__PRELOADED_STATE__} />, document.getElementById("root"));
}


Home.defaultProps = {
};



export default Home;
