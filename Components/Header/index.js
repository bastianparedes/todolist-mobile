import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import CreateButton from './CreateButton';
import SaveButton from './SaveButton';

const Component = ({ posts, setPosts, setShowLoader }) => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.text}
      >
        Posts
      </Text>
      <CreateButton setPosts={setPosts} />
      <SaveButton posts={posts} setShowLoader={setShowLoader} />
    </View>
  );
};

export default Component;
