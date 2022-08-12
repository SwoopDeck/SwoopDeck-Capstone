import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllJumps, deleteJump } from "../store/jumps";
import { me } from "../store/auth";

export class AllJumps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    id: null,
    };
  }
  async componentDidMount() {
    const user = await this.props.getUser();
    const userId = user.auth.id;
    this.setState({ id: userId });
    this.props.getJumps(userId);
  }

  render() {
    let { jumps } = this.props || {};
    
    return (
      <div>
        <h1>JUMPS</h1>
        {jumps.length === 0 ? <h2>Your JUMPS is empty</h2> : <span />}
        <div id="jumps">
          {jumps.map((jump) => {
            return (
              <div key={jump.id}>
                <Link to={`/jumps/${jumps.id}`}>
                  {jump.jumpNumber}
                  <img height="100vh" width="100vh" src={jump.imageUrl} />
                </Link>
                <div>
                  <h3>Location: ${jump.location}</h3>
                  <h3>Aircraft: {item.aircraft}</h3>

                  <button>
                    <Link to={`/jumps/${jumps.id}`}>
                    View Details
                    </Link>
                  </button>
                  <button
                    onClick={() => {
                      this.props.delete(this.state.id, jump.id);
                    }}
                  >
                    Remove Jump
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    jumps: state.jumps,
  };
};
const mapDispatch = (dispatch) => {
  return {
    getUser: () => dispatch(me()),
    getJumps: (userId) => dispatch(fetchAllJumps(userId)),
    delete: (userId,jumpId) => dispatch(deleteJump(userId,jumpId)),
  };
};

export default connect(mapState, mapDispatch)(AllJumps);
