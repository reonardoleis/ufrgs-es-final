import { Component } from 'react';
import { BsClock, BsWind } from  'react-icons/bs';
import AirDiffuserDiffuse from './AirDiffuserDiffuse';
import AirDiffuserSchedule from './AirDiffuserSchedule';

class AirDiffuserItem extends Component {

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
        <td className="mid-align">{this.props.essences.map(e => {return e.name}).join(", ")}</td>
        <td className="mid-align">{this.props.currentDiffusion == null ? "Nenhuma" : this.props.currentDiffusion[0].name}</td>
        <td className="mid-align">{this.props.estimatedTime || "N/A"}</td>
        <td>
          <button type="button" className="btn btn-icon btn-outline-info float-right" data-bs-toggle="modal" data-bs-target={"#air_diffuser_schedule_"+this.props.id}>
            <BsClock/>
          </button>
          <AirDiffuserSchedule essences={this.props.essences} id={this.props.id} updateData={this.updateData}/>
          <button type="button" className="btn btn-icon btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target={"#air_diffuser_"+this.props.id}>
            <BsWind/>
          </button>
          <AirDiffuserDiffuse essences={this.props.essences} id={this.props.id} updateData={this.updateData}/>
        </td>
      </tr>
    );
  }
}

export default AirDiffuserItem;
