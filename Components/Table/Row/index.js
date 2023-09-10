import React from 'react';
import { Button, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import styles from './styles';

const Component = ({ post, setPosts }) => {
  const options = ['To do', 'Blocked', 'Done'];

  const onChangeName = (newName) => {
    post.name = newName;
    setPosts((previousState) => [...previousState]);
  };

  const onChangeContent = (newContent) => {
    post.content = newContent;
    setPosts((previousState) => [...previousState]);
  };

  const onDelete = () => {
    setPosts((previousState) => {
      const newPosts = previousState.filter((postInList) => postInList.id !== post.id);
      return newPosts;
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TextInput
          onChangeText={onChangeName}
          placeholder='Name'
          style={styles.name}
          value={post.name}
        />
        <Button
          onPress={onDelete}
          style={styles.button}
          title='Delete'
        />
      </View>
      <SelectDropdown
        data={options}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        defaultValue={post.status}
        defaultButtonText={post.status}
      />
      <TextInput
        multiline={true}
        onChangeText={onChangeContent}
        placeholder='Content'
        style={styles.content}
        value={post.content}
      />
    </View>
  );
};

export default Component;
// {"content": "Comprar un auto nuevo", "id": 0, "name": "Primera tarea", "status": "toDo"}