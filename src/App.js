import { Routes, Route } from 'react-router-dom'

import Login from 'components/Login/Login';
import Ships from 'components/Ships/Ships';
import { getToken } from 'helpers/token';

const App = () => {

  if(!getToken()) {
    return <Login />
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/ships" element={<Ships />}/>
        <Route />
      </Routes>

    </>
  );
}

export default App;
