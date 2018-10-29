import Button from "../Button";

export default class extends React.Component {
  actionInterval = 0;

  state = {
    isActioning: false,
    remainingDate: 0,
    actionLoading: false,
    cancelLoading: false
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

    this.setState({ actionLoading: true });
    await handleStart(action);
    this.setState({ isActioning: true, actionLoading: false });
    this.actionInterval = setInterval(this.tick, 300);
  };

  handleStop = async isCancel => {
    const { handleCancel, action } = this.props;

    this.setState({ cancelLoading: true });

    if (isCancel) await handleCancel(action);

    this.setState({
      isActioning: false,
      remainingDate: 0,
      cancelLoading: false
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
    const {
      isActioning,
      remainingDate,
      actionLoading,
      cancelLoading
    } = this.state;

    return (
      <div className="col">
        <div className="row-4">
          <Button
            onClick={this.handleStart}
            disabled={isActioning || actionLoading || cancelLoading}
            isLoading={actionLoading}
          >
            {buttonLabel}
          </Button>
        </div>
        {isActioning &&
          !!remainingDate && (
            <>
              <div className="row-4 pull-center">
                {!actionLoading && <span>{remainingDate}</span>}
              </div>
              <div className="row-4 pull-rigth">
                <Button
                  onClick={this.handleStop}
                  disabled={cancelLoading}
                  isLoading={cancelLoading}
                >
                  Cancel
                </Button>
              </div>
            </>
          )}
      </div>
    );
  }
}
