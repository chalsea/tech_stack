import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription(){
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={styles2.descriptionStyle}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }
  //Step 2, replace <Text style={{ flex: 1 }}> with <Text style={styles2.descriptionStyle}>

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
  );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const styles2 = {
  descriptionStyle: {
    flex: 1,
    margin: 5,
    paddingLeft: 15
  }
};
// Step 1: add in styles2 so it's not duplicated as style for titleStyle above

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
