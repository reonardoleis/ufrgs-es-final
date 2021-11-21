import { Component } from 'react';
import MorningHandler from '../../../handlers/MorningHandler';

class CourtainSchedule extends Component {

  constructor(props) {
    super(props);
    this.state = {
      startTimestamp: "07:00",
      speed: "SLOW"
    };
  }

  componentDidMount() {
    this.setState({
      startTimestamp: "07:00",
      status: this.props.status,
      speed: this.props.speed
    });
  }

  changeTimestamp = (event) => {
    this.setState({startTimestamp: event.target.value});
  }

  changeStatus = (event) => {
    this.setState({status: event.target.value});
  }

  changeSpeed = (event) => {
    this.setState({speed: event.target.value});
  }

  resetState = () => {
    this.setState({
      startTimestamp: "07:00",
      status: this.props.status,
      speed: this.props.speed
    });
  }

  scheduleCourtain = () => {
    MorningHandler.scheduleCourtain({
      id: parseInt(this.props.id),
      startTimestamp: this.state.startTimestamp,
      state: this.state.status,
      speed: this.props.speed
    });
  }

  render(){
    return (
      <div className="modal" tabindex="-1" id={"courtain_schedule_"+this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agendar Abertura de Cortina</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.resetState}></button>
            </div>
            <div className="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="courtain-name">Nome</span>
                <input type="text" class="form-control" aria-label="Courtain Name" aria-describedby="courtain-name" value={this.props.name} disabled />
              </div>
              <div class="input-group mb-3">
                <label class="input-group-text" for="courtain-status">Status</label>
                <select value={this.state.status} class="form-select" id="courtain-status" onChange={this.changeStatus}>
                  <option value="OPENED">Abrir</option>
                  <option value="CLOSED">Fechar</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" for="courtain-speed">Velocidade</span>
                <select value={this.state.speed} class="form-select" id="courtain-speed" onChange={this.changeSpeed}>
                  <option value="SLOW">Lenta</option>
                  <option value="MEDIUM">Média</option>
                  <option value="FAST">Rápida</option>
                </select>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="courtain-schedule">Horário</span>
                <input type="time" class="form-control" aria-label="Courtain Schedule" aria-describedby="courtain-schedule" value={this.state.startTimestamp}  onChange={this.changeTimestamp} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.resetState}>Fechar</button>
              <button type="button" className="btn btn-success" onClick={this.scheduleCourtain}>Agendar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourtainSchedule;
