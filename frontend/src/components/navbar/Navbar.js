import { Component } from 'react';

import './style/navbar.css'; // Local CSS.

class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  selectFeature = (event) => {
    this.props.setSelectedFeature(event.target.id);
  }

  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand">Smart Day</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item pointer">
                <a className="nav-link" id="morning" onClick={this.selectFeature}>Smart Morning</a>
              </li>
              <li className="nav-item pointer">
                <a className="nav-link" id="afternoon" onClick={this.selectFeature}>Smart Afternoon</a>
              </li>
              <li className="nav-item pointer">
                <a className="nav-link" id="night" onClick={this.selectFeature}>Smart Night</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
