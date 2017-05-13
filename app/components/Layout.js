import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Layout.css';
import Header from './Header';
import * as ActionTypes from '../constants/ActionTypes';
import Notes from './notes/Notes';
import AddNote from './notes/AddNote';
import Categories from './categories/Categories';

export default class Layout extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    notes: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.state = { 
      type: props.type,
      title: props.title,
      categories: props.categories
    };

    this.typeChangeHandler = this.typeChangeHandler.bind(this);
  };

  typeChangeHandler = (type) => {
    let title = ActionTypes.titles[type];

    this.setState({
      type: type,
      title: title
    });
  }

  renderContent = (type) => {
    if (type == ActionTypes.BROWSE_NOTES) {
      return(
        <Notes 
          type={this.props.type}
          notes={this.props.notes}
          onPropertyTypeChanged={this.typeChangeHandler}
          />
      );
    } else if (this.state.type === ActionTypes.NEW_NOTE) {
      return (
        <AddNote />
      );
    } else if (this.state.type === ActionTypes.BROWSES_CATEGORIES) {
      return (
        <Categories
          type={this.state.type}
          categories={this.state.categories}
          />
      );
    }
  }

  render() {
    const { title, type } = this.state;
    return (
      <section className={style.main}>
        <Header title={title} />
        { this.renderContent(type) }
      </section>
    )
  };
};
