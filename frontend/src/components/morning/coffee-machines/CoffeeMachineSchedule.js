import { Component } from 'react';
import MorningHandler from '../../../handlers/MorningHandler';

class CoffeeMachineSchedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startTimestamp: "07:30",
      slot: 1
    };
  }

  componentDidMount() {
    this.setState({slot: 1});
  }

  changeSlot = (event) => {
    this.setState({slot: event.target.value});
  }

  changeTimestamp = (event) => {
    this.setState({startTimestamp: event.target.value});
  }

  scheduleCoffee = async () => {
    const updated = await MorningHandler.scheduleCoffee({
      coffeeMachineId: this.props.id,
      startTimestamp: this.state.startTimestamp,
      slot: this.state.slot
    });
    this.updateData(updated);
  }

  updateData = (data) => {
    this.props.updateData(data);
  }

  render(){
    const items = this.props.capsules.map((item,index) => {
      return <option value={index+1}>{item.name}</option>;
    });
    return (
      <div className="modal" tabindex="-1" id={"coffee_schedule_"+this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agendar Preparo de Café</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.resetState}></button>
            </div>
            <div className="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="coffee-machine-schedule">Horário</span>
                <input type="time" class="form-control" aria-label="CoffeeMachine Schedule" aria-describedby="coffee-machine-schedule" value={this.state.startTimestamp} onChange={this.changeTimestamp} />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" for="coffee-machine-speed">Cápsula</span>
                <select value={this.state.slot} class="form-select" id="coffee-machine-speed" onChange={this.changeSlot}>
                  {items}
                </select>
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

export default CoffeeMachineSchedule;
