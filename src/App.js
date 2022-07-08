
import {useState} from 'react';
import CommentForm from './components/CommentForm';
import CommentList from './components/CommentList';

function App() {

const [comments,setComments]=useState([])

  return (
    <div >
      <CommentForm setComments={setComments} />
      <CommentList allcomments={comments} />
    </div>
  );
}

export default App;
