import React from 'react';
import {connect} from 'react-redux';
import RatingComponent from './RatingComponent';

const RatingContainer = props => {
  return <RatingComponent props={props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RatingContainer);
