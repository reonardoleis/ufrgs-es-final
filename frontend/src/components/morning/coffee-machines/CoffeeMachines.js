import { Component } from 'react';
import MorningHandler from '../../../handlers/MorningHandler';
import CoffeeMachineItem from './CoffeeMachineItem';

class CoffeeMachines extends Component {

  constructor(props) {
    super(props);
    this.state = {
      coffeeMachines: []
    };
  }

  async componentDidMount() {
    const coffeeMachines = await MorningHandler.getCoffeeMachines();
    this.setState({
      coffeeMachines: coffeeMachines
    });
  }

  updateData = (data) => {
    const state_list = Array.from(this.state.coffeeMachines);
    const item = state_list.filter(cm => {return cm.id == data.id})[0];
    const index = this.state.coffeeMachines.indexOf(item);
    var new_list = this.state.coffeeMachines;
    new_list.splice(index, 1, data);
    this.setState({coffeeMachines: new_list});
  }

  render(){
    const elements = this.state.coffeeMachines.map(cm => {
      return <CoffeeMachineItem name={cm.name} capsules={cm.capsules} currentCapsule={cm.currentCapsule} id={String(cm.id)} schedule={cm.schedule.scheduleItems} updateData={this.updateData}/>
    });
    return (
      <div className="card">
        <h3>Máquinas de Café</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Cápsulas</th>
              <th scope="col">Cápsula Selecionada</th>
              <th scope="col" className="col-md-2 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {elements}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CoffeeMachines;
