import React from 'react';
import './Main.css'

export default class Main extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    {this.props.notes.map(notes => (
                        <li className='mainContent'
                            key={notes.id}
                            id={notes.id}
                            name={notes.name}
                            datemodified={notes.modified}
                        >
                            <h3>{notes.name}</h3>
                            <p>Modified on {notes.modified}</p>
                            <button>
                                Delete Note
                            </button>
                            </li>
                        ))}
                </ul>
                <button>
                    Add note
                </button>
            </div>
        );
    }
}