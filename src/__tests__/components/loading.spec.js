import 'react-native';
import React from 'react';
import Loading from '../../components/loading';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('testing export components', () => {
  const tree = renderer.create(<Loading/>).toJSON();
  expect(tree).toMatchSnapshot();
});
