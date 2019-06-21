import React from 'react';
import './App.css';
import Header from './Header/Header'
import SideBar from './SideBar/Sidebar'
import Main from './Main/Main'
import {Route} from 'react-router-dom';
import STORE from './STORE'

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      store: STORE
    }
  }

 

  render() {
    const { store } = this.state
    return (
      <div>
          <Header />
          <main>
            <SideBar
              key={store.folders.id}
              id={store.folders.id}
              name={store.folders.name}
              folders={store.folders}
              notes={store.notes}
              >
              <Route path='/' component={SideBar} />
            </SideBar>
            <Main
              key={store.notes.id}
              id={store.notes.id}
              folderid={store.notes.folderId}
              name={store.notes.name}
              dateModified={store.notes.modified}
              notes={store.notes}
            >
              <Route path='/' component={Main}/>
            </Main>
        </main>
        </div>
      );
    }
  }

export default App;


/*<Sidebar>
        <Route path='/' component={MainSidebar} />
        <Route path='/foo' component={FooSidebar} />
      </Sidebar>
      <Main>
        <Route path='/' component={MainMain} />
        <Route path='/foo' component={FooMain} />
      </Main>

      */