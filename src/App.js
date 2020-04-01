/* eslint-disable no-unused-vars */
import React, {useEffect} from 'react';

import './styles/App.css';
import API from "./hooks/ApiHooks";
import routes from './hooks/Routes';
import { useRoutes } from 'hookrouter';






const App=()=> {
  const { loginAsync, checkUserLogged } = API();
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      {routeResult}
    </div>
  );
};
/* eslint-enable no-unused-vars */
export default App;
