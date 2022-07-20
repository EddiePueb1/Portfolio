import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Nav';





function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/MovieMad" component={() => {
          window.location.href = "https://htmlcss-project.eddievonfleet.repl.co/index.html"
        }}/>
        <Route path="/Rioz" component={() => {
          window.location.href = "https://rioz-webapp.netlify.app/"
        }}/>
        <Route path="/Tik" component={() => {
          window.location.href = "https://github.com/eddievonfleet/Tik-Tak-Toe"
        }}/>
        <Route path="/Challenges" component={() => {
          window.location.href = "https://github.com/eddievonfleet/Python-Problems-GDS"
        }}/>

        <Route path="/Linked" component={() => {
          window.location.href = "https://www.linkedin.com/in/eduardo-puebla"
        }}/>

        <Route path="/Github" component={() => {
          window.location.href = "https://github.com/eddievonfleet"
        }}/>

        
      
        
        
        
      </Switch>
    </Router>

  );
}

export default App;
