import React, { Component } from 'react';
import './App.css'; import FilteredList from
'./FilteredList';
/*
 This list of produce that is passed into the FilteredList component.
 Notice that it is a list of javascript objects where {key: value}.
*/ const produce =
[
 {name: "Apple", type: "Fruit"},
 {name: "Pineapple", type: "Fruit"} ,
 {name: "Banana", type: "Fruit"},
 {name: "Pear", type: "Fruit"},
 {name: "Strawberry", type: "Fruit"},
 {name: "Orange", type: "Fruit"},
 {name: "Lettuce", type: "Vegetable"},
 {name: "Cucumber", type: "Vegetable"},
 {name: "Eggplant", type: "Vegetable"},
 {name: "Squash", type: "Vegetable"},
 {name: "Bell pepper", type: "Vegetable"},
 {name: "Onion", type: "Vegetable"},
];
class App extends Component { render() {
 return (
 <div className="App">
 {/*
 The list of produce will be passed into the FilteredList
component the items property.
 */}
 <FilteredList items={produce} />
 </div>
 );
 }
}
export default App;