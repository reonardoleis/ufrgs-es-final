import { Component } from 'react';
import AfternoonHandler from '../../../handlers/AfternoonHandler';
import { toast } from 'react-toastify';

class AirDiffuserDiffuse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      slot: 1
    };
  }

  componentDidMount() {
    this.setState({slot: 1});
  }

  changeSlot = (event) => {
    this.setState({slot: event.target.value});
  }

  diffuseEssence = async () => {
   try {
    const updated = await AfternoonHandler.startDiffusing({
      airDiffuserId: this.props.id,
      slot: this.state.slot
    });
    this.updateData(updated);
   } catch (e) {
     this.notify(e.response.data.message);
   }
  }

  updateData = (data) => {
    this.props.updateData(data);
  }

  notify(msg) { toast(msg); };

  render(){
    const items = this.props.essences.map((item,index) => {
      return <option value={index+1}>{item.name}</option>;
    });
    return (
      <div className="modal" tabindex="-1" id={"air_diffuser_"+this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Realizar Difusão</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.resetState}></button>
            </div>
            <div className="modal-body">
              <div class="input-group mb-3">
                <span class="input-group-text" for="courtain-speed">Essência</span>
                <select value={this.state.slot} class="form-select" id="courtain-speed" onChange={this.changeSlot}>
                  {items}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.resetState}>Fechar</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={this.diffuseEssence}>Confirmar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AirDiffuserDiffuse;
