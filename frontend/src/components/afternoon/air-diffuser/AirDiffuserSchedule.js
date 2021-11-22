import { Component } from 'react';
import AfternoonHandler from '../../../handlers/AfternoonHandler';

class AirDiffuserSchedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startTimestamp: "17:00",
      slot: 1
    };
  }

  componentDidMount() {
    this.setState({
      startTimestamp: "17:00",
      slot: 1
    });
  }

  changeSlot = (event) => {
    this.setState({slot: event.target.value});
  }

  changeTimestamp = (event) => {
    this.setState({startTimestamp: event.target.value});
  }

  diffuseEssence = async () => {
    const updated = await AfternoonHandler.scheduleDiffusing({
      airDiffuserId: this.props.id,
      slot: this.state.slot,
      startTimestamp: this.state.startTimestamp
    });
    this.updateData(updated);
  }

  updateData = (data) => {
    this.props.updateData(data);
  }

  render(){
    const items = this.props.essences.map((item,index) => {
      return <option value={index+1}>{item.name}</option>;
    });
    return (
      <div className="modal" tabindex="-1" id={"air_diffuser_schedule_"+this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agendar Difusão</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.resetState}></button>
            </div>
            <div className="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="air-diffuser-schedule">Horário</span>
                <input type="time" class="form-control" aria-label="CoffeeMachine Schedule" aria-describedby="air-diffuser-schedule" value={this.state.startTimestamp} onChange={this.changeTimestamp} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" for="air-diffuser-speed">Essência</span>
                <select value={this.state.slot} class="form-select" id="air-diffuser-speed" onChange={this.changeSlot}>
                  {items}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.resetState}>Fechar</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={this.diffuseEssence}>Agendar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AirDiffuserSchedule;
