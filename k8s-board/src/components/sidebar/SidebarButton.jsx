import React from 'react'

export default function SidebarButton(props) {
  return (
    <React.Fragment>
      <button className="sidebar-btn" onClick={props.onClick}>
        Click me
      </button>
    </React.Fragment>
  )
}
