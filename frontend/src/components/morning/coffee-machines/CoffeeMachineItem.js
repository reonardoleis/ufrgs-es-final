import { Component } from 'react';
import { BsCup, BsClock } from  'react-icons/bs';
import CoffeeMachineSchedule from './CoffeeMachineSchedule';
import CoffeeMachinePrepare from './CoffeeMachinePrepare';

class CoffeeMachineItem extends Component {

  constructor(props) {
    super(props);
  }

  updateData = (data) => {
    this.props.updateData(data);
  }

  render(){
    return (
      <tr>
        <td className="mid-align">{this.props.name}</td>
        <td className="mid-align">{this.props.capsules.map(capsule => {return capsule.name}).join(", ")}</td>
        <td className="mid-align">{this.props.currentCapsule != null ? this.props.currentCapsule[0].name : "Nenhuma"}</td>
        <td>
          <button type="button" className="btn btn-icon btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target={"#coffee_machine_"+this.props.id}>
            <BsCup/>
          </button>
          <CoffeeMachinePrepare capsules={this.props.capsules} id={this.props.id} updateData={this.updateData}/>
          <button type="button" className="btn btn-icon btn-outline-info float-right" data-bs-toggle="modal" data-bs-target={"#coffee_schedule_"+this.props.id}>
            <BsClock/>
          </button>
          <CoffeeMachineSchedule capsules={this.props.capsules} id={this.props.id} updateData={this.updateData}/>
        </td>
      </tr>
    );
  }
}

export default CoffeeMachineItem;
