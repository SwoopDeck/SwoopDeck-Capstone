import React from "react";
import { connect } from "react-redux";
import {
  thunk_fetchSingleDropzone,
  thunk_updateDropzone,
  thunk_createDropzone,
  thunk_deleteDropzone,
  thunk_fetchAllDropzones,
} from "../store/dropzones.js";

/**
 * REACT COMPONENT
 */
export class DropzoneProfile extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {}

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>TEST</h1>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    jumpRecords: state.jumpRecords,
    users: state.auth,
    dropzones: state.dropzones,
    loads: state.loads,
  };
};
const mapDispatch = (dispatch) => {
  return {
    editDropzone: (dropzoneId, dropzone) =>
      dispatch(thunk_updateDropzone(dropzoneId, dropzone)),
    getDropzones: () => dispatch(thunk_fetchAllDropzones()),
    deleteDropzone: (dropzoneId) => dispatch(thunk_deleteDropzone(dropzoneId)),
    addDropzone: (DROPZONE) => dispatch(thunk_createDropzone(DROPZONE)),
    getSingleDropzone: (dropzoneId) =>
      dispatch(thunk_fetchSingleDropzone(dropzoneId)),
  };
};

export default connect(mapState, mapDispatch)(DropzoneProfile);
