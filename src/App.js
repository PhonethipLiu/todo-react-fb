import React from 'react';
import List from './List';
import AddItem from './AddItem';
import base from './base';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true
    };
  }

  // lifecycle hook: this only runs after it is mounted on load
  // syncs to firebase 
  componentDidMount() {
    this.ref = base.syncState('items', {
      context: this,
      state: 'list',
      asArray: true,
      then() {
        this.setState({ loading: false });
      }
    });
  }

  //lifecycle hook
  componentWillUpdate(nextProps, nextState){
    //automatically passes in nextprops and nextState
    console.log("something changed");
    console.log("nextProps:", nextProps, "nextState", nextState);
    //example use: set props in local storage
  }
 //method adds new item passed in the component
  handleAddItem(newItem) {
    this.setState({
      list: this.state.list.concat([newItem])
    });
  }

  //method removes item passed in the component
  handleRemoveItem(index) {
    //the react way: Make a copy of state, modify, and then set new state
    var newList = this.state.list;
    newList.splice(index, 1);
    this.setState({
      list: newList
    });
    //Using firebase, must update via setState for the sync to work
    //if deleting from array (not attached to FB, can use delete)
  }

  // this file uses Bootstrap 3, so you will need to change to Bootstrap 4
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-offset-3">
            <div className="col-sm-12">
              <h3 className="text-center"> My Todo List </h3>
              <AddItem add={this.handleAddItem.bind(this)} />
              {this.state.loading === true
                ? <h3> LOADING... </h3>
                : <List
                    items={this.state.list}
                    remove={this.handleRemoveItem.bind(this)}
                  />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default App;