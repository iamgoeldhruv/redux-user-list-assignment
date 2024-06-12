
import { Provider } from 'react-redux';
import store from './redux/store.ts';
import {UserList}from './components/UserList.tsx';

function App() {
  return (
    <Provider store={store}>
    <UserList/>

    
    </Provider>
  );
}

export default App;
