import { useEffect } from 'react';
import axios from 'axios'
import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import { useDispatch } from 'react-redux';

import './App.css';

function App() {

  const dispatch = useDispatch();

  // TODO - GET Book List from server
  const fetchBookList = () => {
  axios.get('/books').then(response => {
    // Update redux store with our bookList
    dispatch({
      type: 'SET_BOOKLIST',
      payload: response.data
    })
  }).catch( err => {
    console.log('Error getting bookList, error is:', err)
  })
}

  useEffect(() => {
    fetchBookList();
  }, []);

  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm fetchBookList={fetchBookList}/>
        <BookList />
      </main>
    </div>
  );
}

export default App;