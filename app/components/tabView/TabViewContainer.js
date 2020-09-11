import React from 'react';
import {connect} from 'react-redux';
import TabViewComponent from './TabViewComponent';

const TabViewContainer = props => {
  return <TabViewComponent props={props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabViewContainer);
