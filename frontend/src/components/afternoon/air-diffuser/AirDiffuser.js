import { Component } from 'react';
import AfternoonHandler from '../../../handlers/AfternoonHandler';
import AirDiffuserItem from './AirDiffuserItem';

class AirDiffuser extends Component {

  constructor(props) {
    super(props);
    this.state = {
      airDiffusers: []
    };
  }

  async componentDidMount() {
    const airDiffusers = await AfternoonHandler.getAirDiffusers();
    this.setState({
      airDiffusers: airDiffusers
    });
  }

  updateData = (data) => {
    const state_list = Array.from(this.state.airDiffusers);
    const item = state_list.filter(ad => {return ad.id == data.id})[0];
    const index = this.state.airDiffusers.indexOf(item);
    var new_list = this.state.airDiffusers;
    new_list.splice(index, 1, data);
    this.setState({airDiffusers: new_list});
  }

  render(){
    const elements = this.state.airDiffusers.map(airDiffuser => {
      return <AirDiffuserItem name={airDiffuser.name} essences={airDiffuser.essences} id={String(airDiffuser.id)} currentDiffusion={airDiffuser.currentDiffusion} updateData={this.updateData}/>
    });
    return (
      <div className="card">
        <h3>Difusores de Essência</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Essências</th>
              <th scope="col">Essência Selecionada</th>
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

export default AirDiffuser;
