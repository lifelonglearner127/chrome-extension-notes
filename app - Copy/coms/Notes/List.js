import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './List.css';

export default class List extends Component {
    static propTypes = {
        notes: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            notes: props.notes
        }
    }

    render = () => {
        const { notes } = this.props;

        const items = notes.map((note) => {
            <Item 
                value={note}
            />
        });

        return (
            <ul className={style.list}>
                {items}
            </ul>
        );
    }
}