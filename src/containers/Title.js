import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../components/Main';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class Title extends Component {
  render() {
    const {actions} = this.props;
    return (
      <div className='title-screen'>
        <ReactCSSTransitionGroup transitionName="example" transitionAppear={true} transitionAppearTimeout={500}>
          <h1>You Dont know Color</h1>
        </ReactCSSTransitionGroup>

        <Main actions={actions}/>
      </div>
    );
  }
}

Title.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Title);
