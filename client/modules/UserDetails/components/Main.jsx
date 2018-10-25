import { Component } from "react";
import UserDetailsProvider, { Context } from "../providers/UserDetails";
import CountDown from "../../../components/CountDown";

export default class extends Component {
  render() {
    return (
      <UserDetailsProvider>
        <Context>
          {({ name, stats, actions, fetched, startAction, cancelAction }) =>
            fetched && (
              <>
                <h1 className="user__title">{name}</h1>
                <div className="card">
                  <div className="card__title">Caracteristicas</div>
                  <div className="card__content">
                    <div className="col">
                      <div className="row-4">Fuerza: {stats.fuerza}</div>
                      <div className="row-4">
                        Inteligencia: {stats.inteligencia}
                      </div>
                      <div className="row-4">
                        Percepcion: {stats.percepcion}
                      </div>
                    </div>
                    <div className="col">
                      <div className="row-4">Destreza: {stats.destreza}</div>
                      <div className="row-4">
                        Constitucion: {stats.constitucion}
                      </div>
                      <div className="row-4">Suerte: {stats.suerte}</div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card__title">Acciones</div>
                  <div className="card__content">
                    <div className="col no-margin">
                      <div className="row-5">
                        <CountDown
                          start={actions.exploring.start}
                          action="exploring"
                          handleStart={startAction}
                          handleCancel={cancelAction}
                          finish={actions.exploring.finish}
                          buttonLabel="Start exploring"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </Context>
      </UserDetailsProvider>
    );
  }
}
