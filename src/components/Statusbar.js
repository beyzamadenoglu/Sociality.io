import React from 'react';
import { StatusItems } from "./StatusItems";

const Statusbar = () => {
  return (
    <div>
      <ul className="status-bar">
        {StatusItems.map((item, index) => {
          return (
            <li style = {{color: item.color}} key={index}>
              <span className={item.name}>{item.title}
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Statusbar;