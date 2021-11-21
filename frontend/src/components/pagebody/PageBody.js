import { Component } from 'react';
import CoffeeMachines from '../morning/coffee-machines/CoffeeMachines';
import Courtains from '../morning/courtains/Courtains';

import './style/pagebody.css';

class PageBody extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    let card1 = null;
    let card2 = null;
    switch (this.props.feature) {
      case 'morning':
        card1 = <Courtains/>
        card2 = <CoffeeMachines/>
        break;
      case 'afternoon':
        card1 = <h1>TODO</h1>
        card2 = <h1>TODO</h1>
        break;
      case 'night':
        card1 = <h1>TODO</h1>
        card2 = <h1>TODO</h1>
        break;
    }
    return (
      <div>
        {card1}
        {card2}
      </div>
    );
  }
}

export default PageBody;
