import React from 'react';
import { ScrollView, StyleSheet, } from 'react-native';
import { manual } from "../../redux/reducers/manual";
import ManualItem from "./manualItem";
import Loading from "../loading";

class Manual extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getManual();
  }

  render() {
    const { isFetching, data } = this.props.manual;

    if(isFetching) {
      return (<Loading/>);
    }
    return (
      <ScrollView>
        {
          data && data.map((item, index) => <ManualItem key={index} item={item} />)
        }
      </ScrollView>
    );
  }
}

export default Manual;
