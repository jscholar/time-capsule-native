import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const TabItem = ({
  route,
  navigation,
  descriptor,
  focused,
}) => {
  const { options } = descriptor;
  const { tabBarIcon: Icon } = options;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.jumpTo(route.name);
      }}
    >
      <Icon size={focused && route.name === 'Entry' ? 52 : 24} />
    </TouchableOpacity>
  );
};

TabItem.propTypes = {
  focused: PropTypes.bool,
};

TabItem.defaultProps = {
  focused: false,
};

export default TabItem;
