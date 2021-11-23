import { Component } from 'react';
import CleaningRobots from '../afternoon/cleaning-robots/CleaningRobots';
import CoffeeMachines from '../morning/coffee-machines/CoffeeMachines';
import Courtains from '../morning/courtains/Courtains';
import AirDiffusers from '../afternoon/air-diffuser/AirDiffusers';
import Mattresses from '../night/mattress/Mattresses';
import Speakers from '../night/speaker/Speakers';

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
        card1 = <CleaningRobots/>
        card2 = <AirDiffusers/>
        break;
      case 'night':
        card1 = <Mattresses/>
        card2 = <Speakers/>
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
