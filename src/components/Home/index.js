import React from 'react';
import { connect } from 'react-redux';
import { requestApi } from '../../appRedux/actions/homeAction';

class Home extends React.Component{
    componentDidMount() {
        this.props.requestApi();
    }

    showData = (x, i) => (
        <div key={i}>
            {x.email}
        </div>
    )
    render(){
        const { data = [data.users = []], success } = this.props.homeReducer;
        return (
            <div>
                {
                    success ?
                        (data !== null) ?
                        data.users.length>0 ?
                            data.users.map(this.showData)
                            : "No data"
                        : "Loading"
                    : "Loading"
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    homeReducer: state.homeReducer
});

// const mapDispatchToProps = dispatch => bindActionCreators(requestHome, dispatch)

export default connect(mapStateToProps, { requestApi })(Home)
