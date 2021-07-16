import React, { Component } from 'react';

export default class Counter extends Component {
  state = {
    collection: this.props.collection
  };

  // componentDidMount() {
  //   console.log('componentDidMount');
  //   console.log(this.state.collection);
  // }

  handleDelete = index => {
    console.log(index);
    const { collection } = this.state;
    collection.splice(index, 1);
    this.setState({ collection });
  };

  handleAdd = () => {
    const { collection } = this.state;
    collection.push({ Name: '' });
    this.setState({ collection });
  };

  handleOnChange = (e, index) => {
    console.log(e.target.value);
    console.log(index);
    let collection = [...this.state.collection];
    collection[index].Name = e.target.value;
    this.setState({ collection });
  };

  render() {
    const { collection } = this.state;
    return (
      <>
        <button onClick={this.handleAdd}>Add New</button>
        {collection.map((item, index) => (
          <div key={index}>
            <input
              type="text"
              value={item.Name}
              onChange={e => {
                this.handleOnChange(e, index);
              }}
            />
            <button
              onClick={() => {
                this.handleDelete(index);
              }}
            >
              x
            </button>
          </div>
        ))}
      </>
    );
  }
}
