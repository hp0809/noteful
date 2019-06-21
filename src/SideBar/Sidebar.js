import React from 'react';
import {NavLink} from 'react-router-dom'
import './Sidebar.css'

export default class SideBar extends React.Component {
    
    render() {
        return(
            <div className='sidebar'>
                <ul>   
                {this.props.folders.map(folder => (
                    <li
                    key={folder.id}
                    id={folder.id}
                    name={folder.name}>
                        <NavLink to = {folder.id}>
                            {folder.name}
                        </NavLink>
                    </li>
                ))}
                </ul>
                <button>
                Add Folder
                </button>
            </div>
        )
    }
}