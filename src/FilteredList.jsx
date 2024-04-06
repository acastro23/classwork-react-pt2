import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import List from './List';
import './flist.css';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      type: 'Menu',
      showList: false,
    };
  }

  onSearch = (event) => {
    const options = event.target.value.trim().toLowerCase();
    this.setState({
      search: options,
      showList: true, 
    });
  };

  onSelectFilterType = (eventKey) => {
    this.setState({
      type: eventKey,
      showList: true, 
    });
  };

  filterItem = (item) => {
    const matchSearch = this.state.search === '' || item.name.toLowerCase().includes(this.state.search);
    const matchType = this.state.type === 'Menu' || this.state.type === 'All' || item.type === this.state.type;
    return matchSearch && matchType;
  };

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton
          id="typeDropdown"
          title={this.state.type !== 'All' ? this.state.type : 'Menu'}
          onSelect={this.onSelectFilterType}
          className="dropdown"
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item>
          <Dropdown.Item eventKey="Vegetable">Vegetables</Dropdown.Item>
        </DropdownButton>
        <input
          type="text"
          placeholder="Search for a produce"
          onChange={this.onSearch}
          className="search-box"
        />
        {this.state.showList && (
          <List items={this.props.items.filter(this.filterItem)} />
        )}
      </div>
    );
  }
}
export default FilteredList;
