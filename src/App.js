import React from 'react';
import logo from './logo.svg';
import './App.css';
{Button, Progress} from 'semantic-ui-react'

function App() {
  return (
    <div>
    <p> 안녕하 세요 ! </p>
    <Button Primary> hi </Button>
    <Progress percent = {33}/>
    </div>
  );
}

export default App;
