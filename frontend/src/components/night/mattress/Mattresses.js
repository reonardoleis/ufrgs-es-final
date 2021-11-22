import { Component } from 'react';
import NightHandler from '../../../handlers/NightHandler';
import MattressItem from './MattressItem';

class Mattresses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mattresses: []
    };
  }

  async componentDidMount() {
    const mattresses = await NightHandler.getMatresses();
    this.setState({
      mattresses: mattresses
    });

    setInterval(async() => {
      const mattresses = await NightHandler.getMatresses();
      this.setState({
        mattresses: mattresses
      });
    }, 1000);
  }

  updateData = (data) => {
    const state_list = Array.from(this.state.mattresses);
    const item = state_list.filter(ad => {return ad.id == data.id})[0];
    const index = this.state.mattresses.indexOf(item);
    var new_list = this.state.mattresses;
    new_list.splice(index, 1, data);
    this.setState({mattresses: new_list});
  }

  render(){
    const elements = this.state.mattresses.map(mattress => {
      return <MattressItem name={mattress.name} temperatureSensor={mattress.temperatureSensor} id={String(mattress.id)} humiditySensor={mattress.humiditySensor} sleepQualitySensor={mattress.sleepQualitySensor} targetTemperature={mattress.targetTemperature} updateData={this.updateData}/>
    });
    return (
      <div className="card">
        <h3>Colchões</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Temperatura</th>
              <th scope="col">Umidade</th>
              <th scope="col">Nível de Stress</th>
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

export default Mattresses;
