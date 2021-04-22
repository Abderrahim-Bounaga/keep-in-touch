
import {Route} from 'react-router-dom';
import{ Contact,DashBoard,SendMail} from './pages';
// import {navbar} from './components'


function App(props) {
  return (
    <div>
        {/* <navbar/> */}
        <Route path='/' component={Contact} exact/>
        <Route path='/contact' component={Contact} exact/>
        <Route path='/send_mail/:Email' component={SendMail} exact/>
        <Route path='/DashBord' component={DashBoard} exact/>
        
    </div>
  );
}

export default App;