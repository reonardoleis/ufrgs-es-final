import { Component } from 'react';
import MorningHandler from '../../../handlers/MorningHandler';
import CourtainItem from './CourtainItem';

class Courtains extends Component {

  constructor(props) {
    super(props);
    this.state = {
      courtains: []
    };
  }

  async componentDidMount() {
    const courtains = await MorningHandler.getCourtains();
    this.setState({
      courtains: courtains
    });
  }

  updateData = (data) => {
    const state_list = Array.from(this.state.courtains);
    const item = state_list.filter(ad => {return ad.id == data.id})[0];
    const index = this.state.courtains.indexOf(item);
    var new_list = this.state.courtains;
    new_list.splice(index, 1, data);
    this.setState({courtains: new_list});
  }

  render(){
    const elements = this.state.courtains.map(courtain => {
      return <CourtainItem name={courtain.name} status={courtain.state} id={String(courtain.id)} schedules={courtain.schedule} speed={courtain.speed} updateData={this.updateData}/>
    });
    return (
      <div className="card">
        <h3>Cortinas</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Status</th>
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

export default Courtains;
