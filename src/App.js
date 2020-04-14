/* eslint-disable no-unused-vars */
import React from 'react';
import {useRoutes} from 'hookrouter';
import './styles/App.css';
import routes from './hooks/Routes';
import Authentication from './hooks/Authentication';
import LocalStorageOperations from './hooks/LocalStorageOperations';
import * as serviceWorker from './serviceWorker';


const App = () => {
    const routeResult = useRoutes(routes);
    return (
        <div className="App">
            {routeResult}
        </div>
    );
};
/* eslint-enable no-unused-vars */
export default App;
