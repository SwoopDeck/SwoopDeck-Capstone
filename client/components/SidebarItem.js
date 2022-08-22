import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'

export const SidebarItem = ({item}) => {
    const [open, setOpen] = useState(false);
    const [active, toggleActive] = useState('notActive');

    function toggleActiveHandler() {
        setOpen(true);
        if (active === 'notActive') toggleActive('active');
        if (active === 'active') toggleActive('notActive');
    }

  if (item.children) {
    return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className='sidebar-title'>
                <span>
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
                </span>
                <i className="bi bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
            </div>
            <div className='sidebar-content'>
                {item.children.map((child, index) => <SidebarItem key={index} item={child} className={active} onClick={() => toggleActiveHandler()}/>)}
            </div>
        </div>
      )
  } else {
    return (
        <a href={item.path} className='sidebar-item plain'>
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
        </a>
      )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, null)(SidebarItem)