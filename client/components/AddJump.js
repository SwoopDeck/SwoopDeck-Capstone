import React from "react";
import { connect } from "react-redux";
import { createJump } from "../store/jumps";
import { Link } from "react-router-dom";

export class AddJump extends React.Component {
  constructor() {
    super();
    this.state = {
        jumpNumber: '',
        location:'',
        aircraft: '',
        equipment: '',
        exitAltitude: 14000,
        pullAltitude: 4000,
        freeFallTime: 60,
        jumpers: '',
        description: '',
        jumpType: '',
      };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
   
    return (
      <div className="flex-right">
        <h1 style={{marginLeft: '2rem', marginTop: '2rem'}}>Select jump type</h1>
        <div className="select-jump-type-container">
          <button className="jump-type">Belly</button>
          <button className="jump-type">Angle</button>
          <button className="jump-type">Head up</button>
          <button className="jump-type">Head down</button>
          <button className="jump-type">Formation</button>
          <button className="jump-type">FreeFly</button>
          <button className="jump-type">High altitude</button>
          <button className="jump-type">AFF</button>
          <button className="jump-type">Balloon</button>
          <button className="jump-type">Heli</button>
          <button className="jump-type">High pull</button>
          <button className="jump-type">CRW</button>

        </div>
        <form id='jump-form-container' >
          {/* <div>JUMP NUMBER:
          </div> */}
          <div className="jump-form-div">
            <label> Jump number</label>
          <input
          className="jump-info-field"
            type="text"
            name='jumpNumber'
            value={this.state.jumpNumber }
            onChange={this.handleChange}
          />
          </div>
          <div className="jump-form-div">
            <label> Location</label>
          <input
          className="jump-info-field"
            type="text"
            name='location'
            value={this.state.location }
            onChange={this.handleChange}
          />
          </div>
          <div className="jump-form-div">
            <label> Aircraft</label>
          <input
          className="jump-info-field"
            type="text"
            name='aircraft'
            value={this.state.aircraft }
            onChange={this.handleChange}
          />
          </div>
          <div className="jump-form-div">
            <label> Equipment</label>
          <input
          className="jump-info-field"
            type="text"
            name='equipment'
            value={this.state.equipment }
            onChange={this.handleChange}
          />
          </div>
          <div className="jump-form-div">
            <label> Exit altitude</label>
          <input
          className="jump-info-field"
            type="text"
            name='exitAltitude'
            value={this.state.exitAltitude }
            onChange={this.handleChange}
          />
          </div>
          <div className="jump-form-div">
            <label> Pull altitude</label>
          <input
          className="jump-info-field"
            type="text"
            name='pullAltitude'
            value={this.state.pullAltitude }
            onChange={this.handleChange}
          />
          </div>
          <div className="jump-form-div">
            <label> FreeFall time</label>
          <input
          className="jump-info-field"
            type="text"
            name='freeFallTime'
            value={this.state.freeFallTime }
            onChange={this.handleChange}
          />
          </div>
          <div className="jump-form-div">
            <label> Jumpers</label>
          <input
          className="jump-info-field"
            type="text"
            name='jumpers'
            value={this.state.jumpers }
            onChange={this.handleChange}
          />
          </div>
          <div className="jump-form-div">
            <label> Description</label>
          <input
          className="jump-info-field"
            type="text"
            name='description'
            value={this.state.description }
            onChange={this.handleChange}
          />
          </div>
          <div className="jump-form-div">
            <label> Jump certifying official</label>
          <input
          className="jump-info-field"
            type="text"
            name='certifyingOfficialName'
            placeholder="Full name"
            value={this.state.certifyingOfficialName }
            onChange={this.handleChange}
            // style={{    backgroundColor: '#fff',
            //   color: 'rgb(100, 100, 100)',
            //   boxShadow: '0 0 4px 2px #e5f2ff'}}
          />
          <input
          className="jump-info-field"
            type="text"
            name='certifyingOfficialLicenseNumber'
            placeholder="USPA license number"
            value={this.state.certifyingOfficialLicenseNumber }
            onChange={this.handleChange}
            // style={{    backgroundColor: '#fff',
            //   color: 'rgb(100, 100, 100)',
            //   boxShadow: '0 0 4px 2px #e5f2ff'}}
          />
          </div>
          
        
          {/* <div>JUMP TYPE:
          </div>
          <input
            type="text"
            name='jumpType'
            value={this.state.jumpType }
            onChange={this.handleChange}

          /> */}
                     <div></div>
            <button
            className="add-jump-btn"
              onClick={(evt) => {
                evt.preventDefault();
                this.props.add({...this.state}, this.props.user.id);
                this.setState({
                  jumpNumber: '',
                  location: '',
                  aircraft: '',
                  equipment: '',
                  exitAltitude: 14000,
                  pullAltitude: 4000,
                  freeFallTime: 60,
                  jumpers: '',
                  description: '',
                  jumpType: '',
                });
              }}
            > 
            <Link to="/alljumps">
              Add To Logbook
              </Link>
            </button>
         
        </form>
        </div>
    );
  }
}
const mapState = (state) => {
  return {
    user: state.auth,
  };
};
const mapDispatch = (dispatch) => ({
  add: (jump, id) => dispatch(createJump(jump,id)),
});

export default connect(mapState, mapDispatch)(AddJump);
