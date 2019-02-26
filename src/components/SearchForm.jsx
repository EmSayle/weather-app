import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInputChange} value={this.searchText} />
        <button onClick={() => this.props.onSearch(this.state.searchText)}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
