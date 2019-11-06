import React, { Component } from 'react';
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './testActions';
import { Button } from 'semantic-ui-react';
import TestPlaceInput from './TestPlaceInput';
import SampleMap from './SampleMap';
const mapState = (state) => ({
    data: state.test.data
});

const actions = {
    incrementCounter,
    decrementCounter
}

class TestComponent extends Component {    
    render() {
        const {data, incrementCounter, decrementCounter} = this.props;
        return (
            <div>
                <h1>Test Component</h1>
                <h3>The answer is: {data}</h3>
                <Button onClick={incrementCounter} positive content='Increment'></Button>
                <Button onClick={decrementCounter} negative content='Decrement'></Button>
                <br/>
                <br/>
                <br/>
                <TestPlaceInput></TestPlaceInput>
                <SampleMap></SampleMap>
            </div>
        );
    }
}

export default connect(mapState, actions)(TestComponent);