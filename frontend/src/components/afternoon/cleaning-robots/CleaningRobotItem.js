import { Component } from 'react';
import { BsClock, BsPlayCircle } from  'react-icons/bs';
import AfternoonHandler from '../../../handlers/AfternoonHandler';
import CleaningRobotSchedule from './CleaningRobotSchedule';

class CleaningRobotItem extends Component {

  constructor(props) {
    super(props);
  }

  updateData = (data) => {
    this.props.updateData(data);
  }

  startCleaning = async () => {
    const updated = await AfternoonHandler.startCleaning({
      robotId: this.props.id
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
        <td className="mid-align">{"Robô " + this.props.id}</td>
        <td className="mid-align">{this.props.status == "IDLE" ? "Parado" : "Limpando"}</td>
        <td className="mid-align">{this.props.estimatedTime || "N/A"}</td>
        <td>
          <button type="button" className="btn btn-icon btn-outline-info float-right" data-bs-toggle="modal" data-bs-target={"#robot_"+this.props.id}>
            <BsClock/>
          </button>
          <CleaningRobotSchedule updateData={this.updateData} id={this.props.id} />
          <button type="button" className={classnames} onClick={this.startCleaning}>
            <BsPlayCircle/>
          </button>
        </td>
      </tr>
    );
  }
}

export default CleaningRobotItem;
