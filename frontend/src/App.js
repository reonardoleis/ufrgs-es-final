import { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import PageBody from './components/pagebody/PageBody';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {selectedFeature: 'morning'};
  }

  setSelectedFeature = (feature) => {
    this.setState({
      selectedFeature: feature
    });
  }

  render(){
    return (
      <div id="App">
           <ToastContainer />
        <Navbar setSelectedFeature={this.setSelectedFeature}/>
        <div className="container top-padded">
          <PageBody feature={this.state.selectedFeature}/>
        </div>
      </div>
    );
  }
}

export default App;
