import { Component } from 'react';
import { BsPlayCircle, BsStopCircle } from  'react-icons/bs';
import NightHandler from '../../../handlers/NightHandler';

class SpeakerItem extends Component {

  constructor(props) {
    super(props);
  }

  updateData = (data) => {
    this.props.updateData(data);
  }

  playSpeaker = async () => {
    const updated = await NightHandler.playSpeaker({
      speakerId: this.props.id
    });
    this.updateData(updated);
  }

  stopSpeaker = async () => {
    const updated = await NightHandler.stopSpeaker({
      speakerId: this.props.id
    });
    this.updateData(updated);
  }

  render(){
    return (
      <tr>
        <td className="mid-align">{this.props.name}</td>
        <td className="mid-align">{this.props.currentSound != null ? this.props.currentSound.name : "Nenhum"}</td>
        <td>
          <button type="button" className="btn btn-icon btn-outline-primary float-right" onClick={this.playSpeaker}>
            <BsPlayCircle/>
          </button>
          <button type="button" className="btn btn-icon btn-outline-danger float-right" onClick={this.stopSpeaker}>
            <BsStopCircle/>
          </button>
        </td>
      </tr>
    );
  }
}

export default SpeakerItem;
