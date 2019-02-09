import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestHome } from '../../appRedux/actions/homeAction';

class Home extends React.Component{
    componentDidMount() {
        this.props.requestHome();
    }

    render(){
        const { homeReducer } = this.props;
        return <h1>{homeReducer}</h1>;
    }
}

const mapStateToProps = state => ({
    homeReducer: state.homeReducer
});

// const mapDispatchToProps = dispatch => bindActionCreators(requestHome, dispatch)

export default connect(mapStateToProps, { requestHome })(Home)
