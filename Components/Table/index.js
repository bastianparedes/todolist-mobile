import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Row from './Row';

const Component = ({ posts, setPosts }) => {
  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <Row
          key={post.id}
          post={post}
          setPosts={setPosts}
        />
      ))}
    </View>
  );
};

export default Component;
