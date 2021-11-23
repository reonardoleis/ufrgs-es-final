import { Component } from 'react';
import AfternoonHandler from '../../../handlers/AfternoonHandler';

class CleaningRobotSchedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startTimestamp: "07:30"
    };
  }

  changeTimestamp = (event) => {
    this.setState({startTimestamp: event.target.value});
  }

  scheduleCleaning = async () => {
    const hours_minutes = this.state.startTimestamp.split(":").map(el => {return parseInt(el) * 1000});
    var startTimestamp = (+ (new Date()).setHours(0,0,0,0)) + hours_minutes[0] * 3600 + hours_minutes[1] * 60;
    if (startTimestamp <= (+ new Date())) {
      startTimestamp = (new Date(startTimestamp)).setDate(new Date(startTimestamp).getDate() + 1);
    }
    const updated = await AfternoonHandler.scheduleCleaning({
      robotId: this.props.id,
      startTimestamp: startTimestamp
    });
    this.updateData(updated);
  }

  updateData = (data) => {
    this.props.updateData(data);
  }

  render(){
    return (
      <div className="modal" tabindex="-1" id={"robot_"+this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agendar Limpeza</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.resetState}></button>
            </div>
            <div className="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="coffee-machine-schedule">Horário</span>
                <input type="time" class="form-control" aria-label="CoffeeMachine Schedule" aria-describedby="coffee-machine-schedule" value={this.state.startTimestamp} onChange={this.changeTimestamp} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.resetState}>Fechar</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={this.scheduleCoffee}>Agendar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CleaningRobotSchedule;
