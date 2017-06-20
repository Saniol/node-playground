import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadData } from './homeActions';

class Home extends React.Component {
    componentDidMount() {
        this.props.loadData();
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.msg}</p>
            </div>
        );
    }
}

Home.propTypes = {
    loadData: PropTypes.func.isRequired,
    msg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

const connectState = state => ({
    msg: state.get('msg'),
    title: state.get('title'),
});

const connectDispatch = dispatch => ({
    loadData: () => dispatch(loadData()),
});

export default connect(
    connectState,
    connectDispatch,
)(Home);
