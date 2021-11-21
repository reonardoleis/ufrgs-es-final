import { Component } from 'react';
import MorningHandler from '../../../handlers/MorningHandler';

class CoffeeMachinePrepare extends Component {

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

  prepareCoffee = async () => {
    console.log("prepareCoffee called.");
    const updated = await MorningHandler.prepareCoffee({
      coffeeMachineId: this.props.id,
      slot: this.state.slot
    });
    this.updateData(updated);
  }

  updateData = (data) => {
    console.log("prepareCoffee.updateData called.");
    this.props.updateData(data);
  }

  render(){
    const items = this.props.capsules.map((item,index) => {
      return <option value={index+1}>{item.name}</option>;
    });
    return (
      <div className="modal" tabindex="-1" id={"coffee_machine_"+this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Preparar Café</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.resetState}></button>
            </div>
            <div className="modal-body">
            <div class="input-group mb-3">
              <span class="input-group-text" for="courtain-speed">Cápsula</span>
              <select value={this.state.slot} class="form-select" id="courtain-speed" onChange={this.changeSlot}>
                {items}
              </select>
            </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.resetState}>Fechar</button>
              <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={this.prepareCoffee}>Preparar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoffeeMachinePrepare;
