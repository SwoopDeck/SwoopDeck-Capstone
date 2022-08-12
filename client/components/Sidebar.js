import React from 'react';
import { connect } from 'react-redux';
import items from '../../public/sidebarItems.json';
import SidebarItem from './SidebarItem';

export const Sidebar = (props) => {
  return (
    <div className='main'>
        <div className='sidebar'>
        <div className='user-avatar'>
        </div>
            <div className='user-name'>Chris Tomshack</div>
            <hr></hr>
            {items.map((item, index) => <SidebarItem key={index} item={item}/>)}
        </div>
        <div className='sidebar-content plain'>
                <i className='bi bi-box-arrow-right'></i>
                Logout
            </div>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)