import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdo@gmail.com",
        phone: "111-222-333"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "ks@gmail.com",
        phone: "222-333-444"
      },
      {
        id: 3,
        name: "Kevin Durant",
        email: "kd@gmail.com",
        phone: "555-666-777"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
