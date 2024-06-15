import { buy_cake } from "../Redux/cake/CakeAction";
import { connect } from "react-redux";

const CakeContainer = (props) => {
    return (
        <div>
            <h1>NumOfCakes = {props.numOfCakes}</h1>
            <button onClick={props.buy_cake}>Action</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return{
        buy_cake: () => dispatch(buy_cake())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CakeContainer)