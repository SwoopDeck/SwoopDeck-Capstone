import React from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import items from '../../public/sidebarItems.json';
import SidebarItem from './SidebarItem';
import { logout } from '../store';
import { Link } from 'react-router-dom';

export const Sidebar = (props) => {
  const dispatch = useDispatch(); 
  return (
    <div className='main'>
        <div className='sidebar'>
        <div className='user-avatar'>
        </div>
            <div className='user-name'>Chris Tomshack</div>
            <hr></hr>
            {items.map((item, index) => <SidebarItem key={index} item={item}/>)}

                <i className='bi bi-box-arrow-right'>

                <button className='logout-btn' onClick={() => dispatch(logout())}>Logout</button>
                </i>
        </div>
    </div>
  )
}


export default Sidebar