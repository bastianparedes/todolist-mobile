import React from 'react';
import { Button } from 'react-native';
import styles from './styles';

const Component = ({ setPosts }) => {
  const onPressHandler = () => {    
    setPosts((previousState) => {
      const newPost = {
        content: '',
        id: previousState.length,
        name: '',
        status: 'To do'
      };

      let posts = [...previousState, newPost];
      posts = posts.map((post, index) => {
        return {
          ...post,
          id: index
        };
      });
      

      return posts;
    });
  }

  return (
    <Button
      onPress={onPressHandler}
      style={styles.button}
      title='Create'
    />
  );
};

export default Component;
