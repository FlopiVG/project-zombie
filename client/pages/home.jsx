import "../css/main.scss";
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
