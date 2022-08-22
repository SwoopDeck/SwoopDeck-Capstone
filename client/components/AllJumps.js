import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Thunk_fetchAllJumpRecords, Thunk_deleteJump } from "../store/jumpRecords";
import { me } from "../store/auth";

export class AllJumps extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {};
  }
  componentDidMount() {
    let userId = this.props.user.id
    this.props.getJumps(userId);
  }

  
  render() {
    function alertMessage() {
      alert('This feature is not yet available!')
    }

    let userId = this.props.user.id || ''  
    
    let jumps = [this.props.jumpRecords] || []
    console.log('jumps: ', jumps);
    // console.log(this.props)
    

    return (
      <div className="flex-right">
        <div>
          <div className="right-top-column">
            <div className="total-freefall-time-integers">3 hours 21 minutes</div>
        <div className="total-freefall-time">Total FreeFall Time</div>
          </div>

        {jumps.length === 0 ? <h2>You haven't made any skydives!</h2> : <span />}

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
            <button className="recent-jumps"           onClick={(e) => {
            e.preventDefault();
            window.location.href = "http://localhost:8080/add";
          }}>Add manually</button>
            <button className="recent-jumps" onClick={alertMessage}>Record</button>
            <button className="recent-jumps" onClick={alertMessage}>Import</button>

          </div>
        </div>
        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    user: state.auth,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getJumps: (userId) => dispatch(Thunk_fetchAllJumpRecords(userId)),
    delete: (userId, jumpId) => dispatch(Thunk_deleteJump(userId, jumpId)),
  };
};

export default connect(mapState, mapDispatch)(AllJumps);
