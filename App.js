import React, { useState, useEffect } from 'react';
import Loader from './Components/Loader';
import Header from './Components/Header';
import Table from './Components/Table';
import {
  ScrollView,
  StatusBar,
} from 'react-native';


const App = () => {
  const [posts, setPosts] = useState([]);
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const query = async () => {
      const response = await fetch('https://www.bastianparedes.com/todolist/api');
      const json = await response.json();
      setPosts(json);
      setShowLoader(false);
    }

    query();
  }, []);

  console.log(posts);

  return (
    <>
      { showLoader ? <Loader /> : null}
      <ScrollView>
        <Header posts={posts} setPosts={setPosts} setShowLoader={setShowLoader} />
        <Table posts={posts} setPosts={setPosts} />
      </ScrollView>
    </>
  );
}

export default App;
