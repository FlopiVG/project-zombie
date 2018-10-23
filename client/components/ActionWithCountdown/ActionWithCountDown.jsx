export default class extends React.Component {
  actionInterval = 0;

  state = {
    isActioning: false,
    remainingDate: 0
  };

  componentDidMount() {
    const { start, finish } = this.props;

    if (finish > start) {
      this.setState({ isActioning: true });
      this.actionInterval = setInterval(this.tick, 300);
    }
  }

  handleStart = async () => {
    const { action, handleStart, finish } = this.props;
    const now = Date.now();

    if (now < finish) return;

    await handleStart(action);

    this.setState({ isActioning: true });

    this.actionInterval = setInterval(this.tick, 300);
  };

  handleStop = () => {
    this.setState({
      isActioning: false
    });

    clearInterval(this.actionInterval);
  };

  tick = () => {
    const { finish } = this.props;
    const now = Date.now();

    if (now > finish) this.handleStop();
    else {
      this.setState({
        remainingDate: finish - now
      });
    }
  };

  componentWillUnmount() {
    this.handleStop();
  }

  render() {
    const { buttonLabel } = this.props;
    const { isActioning, remainingDate } = this.state;

    return (
      <div className="col">
        <div className="row-4">
          <button onClick={this.handleStart} disabled={isActioning}>
            {buttonLabel}
          </button>
        </div>
        {isActioning &&
          !!remainingDate && (
            <>
              <div className="row-4 pull-center">
                <span>{remainingDate}</span>
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
