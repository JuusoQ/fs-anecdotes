import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer';

const AnecdoteForm = (props) => {
    const add = (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        event.target.anecdote.value = '';
        props.store.dispatch(
            addAnecdote(content)
        )
    }

    return (
        <div>
            <h2>create new</h2>

            <form onSubmit={add}>
                <input type="text" name="anecdote" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AnecdoteForm;