import "../css/main.scss";
import ActionWithCountdown from "../components/ActionWithCountdown";
import UserDetails from "../modules/UserDetails";

export default class extends React.Component {
  render() {
    return (
      <div className="container card">
        <UserDetails />
      </div>
    );
  }
}
