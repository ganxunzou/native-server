import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import style from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { pages: null };
  }
  dynamicImport(e, type) {
    import(`./${type}/`).then((Component) => {
      this.Component = Component;
      this.forceUpdate();
    });
  }
  render() {
    return (
            <div className={style.main}>
              <h1>dynamic add script</h1>
                <div>
                  <button onClick={e => this.dynamicImport(e, 'header')}>addHeader</button>
                  <button onClick={e => this.dynamicImport(e, 'body')}>addBody</button>
                  <button onClick={e => this.dynamicImport(e, 'footer')}>addFooter</button>
                </div>
                {this.Component ? <this.Component.default /> : null}
            </div>
    );
  }
}
App.propTypes = {
  // name: PropTypes.string,
};

export default App;
