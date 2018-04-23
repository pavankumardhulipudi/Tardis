import configureStore from 'redux-mock-store';
import 'react-native';
import React from 'react';
import KeyFob from '../../components/KeyFob';
import { shallow, configure } from 'enzyme';
//import Adapter from 'enzyme-adapter-react-16';
//configure({ adapter: new Adapter() });


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const initialState = {};
const mockStore = configureStore();
let wrapper;
let store;

describe('#KeyFob', () => {
  beforeEach(() => {
    //store = mockStore(initialState);
  });

  xit("#component", () => {
    wrapper = shallow(<KeyFob store={store}/>)
  });
});
