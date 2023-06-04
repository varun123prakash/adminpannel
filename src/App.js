import './App.css';
import { RouterProvider } from 'react-router-dom';
import { useContext, useEffect, useMemo } from 'react';
import { publicRouter } from './navigation/PublicRouter';
import { privateRouter } from './navigation/PrivateRouter';
import { GlobalContext } from './context';

function App() {
  const { state, actions } = useContext(GlobalContext)
  const { login } = state
  const email = localStorage.getItem('email')

  useEffect(() => {
    if (email)
      actions.loginsAction(true)
    else
      actions.loginsAction(false)
  }, [email, login])

  if (login === true) {
    return (
      <RouterProvider router={privateRouter} />
    )
  }
  else if (login === false)
    return (
      <RouterProvider router={publicRouter} />
    );
  else if (login === null || email === undefined)
    return (
      <div>Loading....</div>
    );
}

export default App;
