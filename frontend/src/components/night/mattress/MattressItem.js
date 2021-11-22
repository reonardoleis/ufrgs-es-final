import { Component } from 'react';
import { BsThermometer } from  'react-icons/bs';
import NightHandler from '../../../handlers/NightHandler';
import MattressTemperature from './MattressTemperature';

class MattressItem extends Component {

  constructor(props) {
    super(props);
  }

  updateData = (data) => {
    this.props.updateData(data);
  }

  setTemperature = async () => {
    const updated = await NightHandler.setTemperature({
      mattressId: this.props.id
    });
    this.updateData(updated);
  }

  render(){
    var classnames = "btn btn-icon btn-outline-primary float-right";
    if (this.props.status != "IDLE") {
      classnames += " invisible";
    }
    return (
      <tr>
        <td className="mid-align">{this.props.name}</td>
        <td className="mid-align">{Math.round(this.props.temperatureSensor.currentTemperature * 10)/10}°C</td>
        <td className="mid-align">{Math.round(this.props.humiditySensor.level * 10)/10}</td>
        <td className="mid-align">{Math.round(this.props.sleepQualitySensor.stressLevel * 10)/10}</td>
        <td>
          <button type="button" className="btn btn-icon btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target={"#mattress_"+this.props.id}>
            <BsThermometer/>
          </button>
          <MattressTemperature updateData={this.updateData} id={this.props.id} targetTemperature={this.props.targetTemperature} />
        </td>
      </tr>
    );
  }
}

export default MattressItem;
