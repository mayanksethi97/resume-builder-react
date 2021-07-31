
import './App.css';
import Landing from './components/Landing/Landing';
import Header from './components/Header';
import { Route, Switch } from "react-router-dom"
import TemplateListing from "./components/TemplateListing";
import ResumeTemplates from './components/Resume Templates';

function App() {
  return (
    <>
      <Header />
      <div>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/choose-template">
            <TemplateListing />
          </Route>
          <Route path="/make-resume">
            <ResumeTemplates />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
