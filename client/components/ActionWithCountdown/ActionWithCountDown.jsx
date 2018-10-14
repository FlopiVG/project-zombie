export default class extends React.Component {
  actionInterval = 0;

  state = {
    isActioning: false,
    actionStartDate: 0,
    actionRemainDate: 0
  };

  handleStart = () => {
    this.setState({ isActioning: true, actionStartDate: Date.now() });

    this.actionInterval = setInterval(this.tick, 300);
  };

  handleStop = () => {
    this.setState({
      isActioning: false,
      actionStartDate: 0,
      actionRemainDate: 0
    });

    clearInterval(this.actionInterval);
  };

  tick = () => {
    const { delay } = this.props;
    const { actionStartDate } = this.state;

    const actionRemainDate = actionStartDate - Date.now() + delay;

    if (actionRemainDate <= 0) this.handleStop();
    else {
      this.setState({
        actionRemainDate
      });
    }
  };

  componentWillUnmount() {
    this.handleStop();
  }

  render() {
    const { isActioning, actionRemainDate } = this.state;
    const { buttonLabel } = this.props;
    return (
      <div className="col">
        <div className="row-4">
          <button onClick={this.handleStart} disabled={isActioning}>
            {buttonLabel}
          </button>
        </div>
        {isActioning &&
          !!actionRemainDate && (
            <>
              <div className="row-4 pull-center">
                <span>{Math.floor(actionRemainDate / 1000)}</span>
              </div>
              <div className="row-4 pull-rigth">
                <button onClick={this.handleStop}>Cancel</button>
              </div>
            </>
          )}
      </div>
    );
  }
}
