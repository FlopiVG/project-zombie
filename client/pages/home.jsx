import "../css/main.scss";
import ActionWithCountdown from "../components/ActionWithCountdown";

export default class extends React.Component {
  state = {
    isExploring: false
  };

  handleStartExploring = () => {
    this.setState({
      isExploring: true
    });
  };

  handleCancelExploring = () => {
    this.setState({
      isExploring: false
    });
  };

  render() {
    const { isExploring } = this.state;
    return (
      <div className="container card">
        <h1 className="user__title">Flopi</h1>
        <div className="card">
          <div className="card__title">Caracteristicas</div>
          <div className="card__content">
            <div className="col">
              <div className="row-4">Fuerza: 8</div>
              <div className="row-4">Inteligencia: 8</div>
              <div className="row-4">Percepcion: 8</div>
            </div>
            <div className="col">
              <div className="row-4">Destreza: 8</div>
              <div className="row-4">Constitucion: 8</div>
              <div className="row-4">Suerte: 8</div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card__title">Acciones</div>
          <div className="card__content">
            <div className="col no-margin">
              <div className="row-5">
                <ActionWithCountdown
                  delay={5000}
                  buttonLabel="Start exploring"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
