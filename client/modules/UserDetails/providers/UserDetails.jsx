import { Component, createContext } from "react";
import { UserDetails } from "../repository/UserDetails";

const { Provider, Consumer } = createContext();

export default class extends Component {
  static = {
    fetched: false,
    loading: false,
    name: "",
    stats: {
      fuerza: 0,
      inteligencia: 0,
      percepcion: 0,
      destreza: 0,
      constitucion: 0,
      suerte: 0
    },
    actions: {}
  };

  componentWillMount() {
    this.setState({ loading: true });
    UserDetails.getUserDetails().then(({ name, stats, actions }) => {
      this.setState({
        loading: false,
        fetched: true,
        name,
        stats,
        actions
      });
    });
  }

  startAction = action => {
    const { actions } = this.state;

    UserDetails.startAction(action).then(data => {
      this.setState({ actions: { ...actions, data } });
    });
  };

  render() {
    const { startAction } = this;

    return (
      <Provider value={{ ...this.state, startAction }}>
        {this.props.children}
      </Provider>
    );
  }
}

export const Context = Consumer;
