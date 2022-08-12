import React from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'

export const SidebarItem = ({item}) => {
    const [open, setOpen] = useState(false);

  if (item.children) {
    return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className='sidebar-title'>
                <span>
                    {item.icon && <i className={item.icon}></i>}
                    {item.title}
                </span>
                <i class="bi bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
            </div>
            <div className='sidebar-content'>
                {item.children.map((child, index) => <SidebarItem key={index} item={child} />)}
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

export default connect(mapStateToProps, mapDispatchToProps)(SidebarItem)