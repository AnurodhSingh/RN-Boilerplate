import React from 'react';
import {connect} from 'react-redux';
import VectorIconComponent from './VectorIconComponent';

const VectorIconContainer = props => {
  return <VectorIconComponent props={props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VectorIconContainer);
