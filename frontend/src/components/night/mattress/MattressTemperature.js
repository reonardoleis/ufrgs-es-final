import { Component } from 'react';
import NightHandler from '../../../handlers/NightHandler';

class MattressTemperature extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newTemperature: 0
    };
  }

  changeNewTemperature = (event) => {
    this.setState({newTemperature: event.target.value});
  }

  setTemperature = async () => {
    const updated = await NightHandler.setTemperature({
      mattressId: this.props.id,
      targetTemperature: parseFloat(this.state.newTemperature)
    });
    this.updateData(updated);
  }

  updateData = (data) => {
    this.props.updateData(data);
  }

  render(){
    return (
      <div className="modal" tabindex="-1" id={"mattress_"+this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Temperatura Alvo</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.resetState}></button>
            </div>
            <div className="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" id="target-current">Temperatura Alvo Atual</span>
                <input type="text" class="form-control" aria-label="Target Temperature" aria-describedby="target-current" value={Math.round(this.props.targetTemperature * 100)/100} disabled />
                <span class="input-group-text">°C</span>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="new-target">Nova Temperatura Alvo</span>
                <input type="float" class="form-control" aria-label="New Target Temperature" aria-describedby="new-target" value={this.state.newTemperature} onChange={this.changeNewTemperature} />
                <span class="input-group-text">°C</span>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.resetState}>Fechar</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={this.setTemperature}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MattressTemperature;
