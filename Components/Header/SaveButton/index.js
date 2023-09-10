import React from 'react';
import { Button } from 'react-native';
import styles from './styles';

const Component = ({ posts, setShowLoader }) => {
  const savePosts = async () => {
    setShowLoader(true);
    await fetch('https://www.bastianparedes.com/todolist/api', {
      body: JSON.stringify(posts),
      method: 'POST'
    });
  
    setShowLoader(false);
  };

  return (
    <Button
      onPress={savePosts}
      style={styles.button}
      title='Save'
    />
  );
};

export default Component;


