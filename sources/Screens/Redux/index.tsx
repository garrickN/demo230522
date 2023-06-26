import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'; // Import Dispatch type

interface CounterScreenProps {
  counter: number;
  incrementCounter: () => void;
  decrementCounter: () => void;
}

const CounterScreen: React.FC<CounterScreenProps> = ({
  counter,
  incrementCounter,
  decrementCounter,
}) => {
  return (
    <View>
      <Text>Counter: {counter}</Text>
      <Button title="Increment" onPress={incrementCounter} />
      <Button title="Decrement" onPress={decrementCounter} />
    </View>
  );
};

const mapStateToProps =
  (state: {
    counter: {
      counter: number
    }
  }) => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    incrementCounter: () => dispatch({ type: 'INCREMENT' }),
    decrementCounter: () => dispatch({ type: 'DECREMENT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);
