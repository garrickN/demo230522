import React, { useReducer } from 'react';
import { useContext } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import reducer from '../Redux/reducer';

type Color = {
    light: {
        foreground: string,
        background: string
    },
    dark: {
        foreground: string,
        background: string
    }
}
const themes: Color = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    },
};

const ThemeContext = React.createContext(themes.light);

const initialState = {
    backgroundColor: themes.light,
};

const colorReducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_BACKGROUND_COLOR':
        return { ...state, backgroundColor: action.payload };
      default:
        return state;
    }
};

const countReducer = (state: Color, action: {
    type: string
    step: number
}) => {
    const { type, step } = action;
    switch (type) {
      case 'INCREMENT': {
        return {
          ...state,
          count: state.count + step,
        };
      }
      case 'DECREMENT': {
        return {
          ...state,
          count: state.count - step,
        };
      }
      default:
        return state;
    }
  };


const AppContext = () => {
    const [state, dispatch] = useReducer(colorReducer, initialState);
    const changeBackgroundColor = (newColor) => {
        dispatch({ type: 'CHANGE_BACKGROUND_COLOR', payload: newColor });
      };
    return (
        <ThemeContext.Provider value={themes.light}>
            <Toolbar />
        </ThemeContext.Provider>
    );
};

const Toolbar = (_props: any) => {
    return (
        <View>
            <ThemedButton/>
        </View>
    );
};

function ThemedButton() {
    const {background,foreground} = useContext(ThemeContext);

    return (
    <TouchableOpacity style={{ backgroundColor: theme.background}} onPress={() => {changeContext()}}>
        <Text style= {{color: theme.foreground}}>I am styled by theme context!</Text>
    </TouchableOpacity>
    );
}

export default AppContext;
