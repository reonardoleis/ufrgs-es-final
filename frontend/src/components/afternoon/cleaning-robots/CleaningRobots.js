import { Component } from 'react';
import AfternoonHandler from '../../../handlers/AfternoonHandler';
import CleaningRobotItem from './CleaningRobotItem';

class CleaningRobots extends Component {

  constructor(props) {
    super(props);
    this.state = {
      robots: []
    };
  }

  async componentDidMount() {
    const robots = await AfternoonHandler.getRobots();
    console.log(robots);
    this.setState({
      robots: robots
    });
  }

  updateData = (data) => {
    const state_list = Array.from(this.state.robots);
    const item = state_list.filter(cr => {return cr.id == data.id})[0];
    const index = this.state.robots.indexOf(item);
    var new_list = this.state.robots;
    new_list.splice(index, 1, data);
    this.setState({robots: new_list});
  }

  render(){
    const elements = this.state.robots.map(robot => {
      return <CleaningRobotItem status={robot.state} id={String(robot.id)} schedules={robot.schedule} updateData={this.updateData}/>
    });
    return (
      <div className="card">
        <h3>Robôs de Limpeza</h3>
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

export default CleaningRobots;
