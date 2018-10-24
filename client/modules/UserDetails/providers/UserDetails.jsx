import { Component, createContext } from "react";
import { UserDetails } from "../repository/UserDetails";

const { Provider, Consumer } = createContext();

export default class extends Component {
  state = {
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

  componentDidMount() {
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

  startAction = async action => {
    const { actions } = this.state;
    this.setState({ loading: true });

    const data = await UserDetails.startAction(action);
    this.setState({ actions: { ...actions, ...data }, loading: false });
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
