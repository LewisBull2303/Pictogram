import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

import Layout from './components/layout';
import Login from './routes/login'

import UserProfile  from './routes/userprofile';  

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route element={<Layout><UserProfile/></Layout>} path='/:username' />
          <Route element={<Layout><Login/></Layout>} path='/login' />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
