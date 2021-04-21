import { Provider } from 'react-redux';
import HomeScreen from './components/pages/Home';
import { store } from './store';

function App() {
   return (
      <Provider store={store}>
         <HomeScreen />
      </Provider>
   );
}

export default App;
