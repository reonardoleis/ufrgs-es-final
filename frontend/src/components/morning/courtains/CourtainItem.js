import { Component } from 'react';
import { BsClock, BsEye } from  'react-icons/bs';
import CourtainSchedule from './CourtainSchedule';
import CourtainViewSchedule from './CourtainViewSchedule';

class CourtainItem extends Component {

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
        <td className="mid-align">{this.props.status == "OPENED" ? "Aberta" : "Fechada"}</td>
        <td>
          <button type="button" className="btn btn-icon btn-outline-secondary float-right" data-bs-toggle="modal" data-bs-target={"#courtain_view_"+this.props.id}>
            <BsEye/>
          </button>
          <CourtainViewSchedule name={this.props.name} schedules={this.props.schedules} id={this.props.id}/>
          <button type="button" className="btn btn-icon btn-outline-info float-right" data-bs-toggle="modal" data-bs-target={"#courtain_schedule_"+this.props.id}>
            <BsClock/>
          </button>
          <CourtainSchedule name={this.props.name} status={this.props.status} speed={this.props.speed} id={this.props.id} updateData={this.props.updateData}/>
        </td>
      </tr>
    );
  }
}

export default CourtainItem;
