/* eslint-disable react/require-default-props */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/accessible-emoji */
import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'white',
    // zIndex: 99999,
  },
  content: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
})

class Dialog extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    visibleModalId: true,
  };

  _onClose() {
    this.setState({ visibleModalId: false })
  }

  renderModalContent = message => (
    <View style={styles.content}>
      <Text style={styles.contentTitle}>{ message }</Text>
      <Button
        onPress={() => this._onClose()}
        title="Close"
      />
    </View>
  );


  render() {
    const { data } = this.props
    return (
      <View style={styles.container}>
        { data ? (
          <Modal
            isVisible={this.state.visibleModalId}
            animationInTiming={800}
            backdropTransitionInTiming={600}
          >
            {this.renderModalContent(data)}
          </Modal>
        ) : null }
      </View>
    )
  }
}

Dialog.propTypes = {
  data: PropTypes.any
}

export default Dialog
