import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllJumps, deleteJump } from "../store/jumps";
import { me } from "../store/auth";
import Sidebar from "./Sidebar";

export class AllJumps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    let userId = this.props.user.id;
    this.props.getJumps(userId);
  }

  render() {
    let { jumps } = this.props;
    return (
      <div className="flex-right">
        <div>
          <div className="right-top-column">
            <div className="total-freefall-time-integers">3 hours 21 minutes</div>
        <div className="total-freefall-time">Total FreeFall Time</div>
          </div>

        {jumps.length === 0 ? <h2>Your JUMPS is empty</h2> : <span />}

        <div className="right-bottom-column" id="jumps">
          <div className="right-bottom-column-left-side">

            <h2 style={{marginBottom: '1rem'}}>Your recent activity</h2>
          {jumps.map((jump) => {
            return (
              <div className="recent-jumps" key={jump.id}>
                <Link to={`/jumps/${jump.id}`}>
                  <img height="100vh" width="100vh" src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.kHAtTjGvPMSeFGe_bZUGFwHaHa%26pid%3DApi&f=1' />
                </Link>
                <div className="recent-jump-info">
                  <h4>{jump.location}</h4>
                  <h4>Aircraft: {jump.aircraft}</h4>
                  <button className="view-jump-details">
                    <Link to={`/jumps/${jump.id}`}>View Jump Details</Link>
                  </button>
                  {/* <button
                    onClick={() => {
                      this.props.delete(this.props.user.id, jump.id);
                    }}
                    >
                    Remove Jump
                  </button> */}
                </div>
                    <h4 className="jump-number">Jump #{jump.jumpNumber}</h4>
                </div>
            );
          })}
          </div>
          <div className="right-bottom-column-right-side">
            <h2 style={{marginBottom: '1rem'}}>Add New Jump</h2>
            <button className="recent-jumps">Record</button>
            <button className="recent-jumps">Add manually</button>
            <button className="recent-jumps">Import</button>

          </div>
        </div>
        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    jumps: state.jumps,
    user: state.auth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getJumps: (userId) => dispatch(fetchAllJumps(userId)),
    delete: (userId, jumpId) => dispatch(deleteJump(userId, jumpId)),
  };
};

export default connect(mapState, mapDispatch)(AllJumps);
