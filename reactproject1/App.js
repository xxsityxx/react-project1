import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import React from 'react';

      class MovieCredits extends React.Component {
            constructor () {
              super();
                this.state = {
                movie: 'Back to the future 4',
                actors: ['joe','chuck','bob']
              };
            }
      
            render() {
              return <div>
                <h1>Movie Name: {this.state.movie}</h1>
                <ActorList names={this.state.actors} />
                </div>
            }
          }
        

        
        
      class ActorList extends React.Component {
            render() {
              let listActors = this.props.names.map((actor) => {
                return <li> {actor} </li>
              })
                     
              return <div>
              <h3> Actors: </h3>
                <ul>
                  {listActors}
                </ul>  
              </div>
         
            }
          }





      function App() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload your gun.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <div className="MovieList"></div>
              <div className="ActorList"></div>
            </header>
          </div>
          

        );  

        
      }

export default App;
ReactDOM.render(<MovieCredits/>,document.getElementById('App'));
