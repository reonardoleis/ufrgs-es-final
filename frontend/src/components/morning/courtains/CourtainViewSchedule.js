import { Component } from 'react';

class CourtainViewSchedule extends Component {

  constructor(props) {
    super(props);
  }

  render(){
    const speeds = {
      "SLOW": "Devagar",
      "MEDIUM": "Média",
      "FAST": "Rápida"
    };
    const items = this.props.schedules.map((schedule) => {
      return <tr><td>{(new Date(schedule.startTimestamp)).toLocaleString("pt-BR")}</td><td>{schedule.state == "OPENED" ? "Abrir" : "Fechar"}</td><td>{speeds[schedule.speed]}</td></tr>;
    });
    return (
      <div className="modal" tabindex="-1" id={"courtain_view_"+this.props.id}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Agendados em {this.props.name}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={this.resetState}></button>
            </div>
            <div className="modal-body">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Horário</th>
                  <th scope="col">Ação</th>
                  <th scope="col">Velocidade</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
            </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={this.resetState}>Fechar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CourtainViewSchedule;
