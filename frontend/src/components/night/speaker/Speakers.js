import { Component } from 'react';
import NightHandler from '../../../handlers/NightHandler';
import SpeakerItem from './SpeakerItem';

class Speakers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      speakers: []
    };
  }

  async componentDidMount() {
    const speakers = await NightHandler.getSpeakers();
    this.setState({
      speakers: speakers
    });

    setInterval(async() => {
      const speakers = await NightHandler.getSpeakers();
      this.setState({
        speakers: speakers
      });
    }, 1000);
  }

  updateData = (data) => {
    const state_list = Array.from(this.state.speakers);
    const item = state_list.filter(ad => {return ad.id == data.id})[0];
    const index = this.state.speakers.indexOf(item);
    var new_list = this.state.speakers;
    new_list.splice(index, 1, data);
    this.setState({speakers: new_list});
  }

  render(){
    const elements = this.state.speakers.map(speaker => {
      return <SpeakerItem name={speaker.name} sounds={speaker.sounds} currentSound={speaker.currentSound} id={speaker.id} updateData={this.updateData}/>
    });
    return (
      <div className="card">
        <h3>Caixas de Som</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Reproduzindo</th>
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

export default Speakers;
