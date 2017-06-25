import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loadData, reset } from './homeActions';
import { getStateRoot } from './homeReducer';

class Home extends React.Component {
    static fetchData({ store }) {
        return store.dispatch(loadData());
    }
    componentDidMount() {
        if (!this.props.loaded) {
            this.props.loadData();
        }
    }
    componentWillUnmount() {
        this.props.beforeUnmount();
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.msg}</p>
                <Link to="/another">Another page</Link>
            </div>
        );
    }
}

Home.propTypes = {
    loadData: PropTypes.func.isRequired,
    beforeUnmount: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    loaded: PropTypes.bool.isRequired,
};

const connectState = state => ({
    msg: getStateRoot(state).get('msg'),
    title: getStateRoot(state).get('title'),
    loaded: getStateRoot(state).get('loaded'),
});

const connectDispatch = dispatch => ({
    loadData: () => dispatch(loadData()),
    beforeUnmount: () => dispatch(reset()),
});

export default connect(
    connectState,
    connectDispatch,
)(Home);
