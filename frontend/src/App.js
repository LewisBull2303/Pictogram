import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from './routes/components/layout';

import UserProfile  from './routes/userprofile';  

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route element={<UserProfile/>} path='/:username' />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
