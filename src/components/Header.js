import React from "react"

export default function Header(props) {
  function handleClick(event) {
    props.onTabClick(event.target.id);
  }

    return (
        <header className="bg-slate-200" >
        <div className="container mx-auto flex justify-between items-center h-16" >
          <a>Logo</a>
          <nav>
            {props.tabs.map((tab, i) =>
                <button key={i} id={tab.id} disabled={props.currentTab === `${tab.id}`} onClick={handleClick}>{tab.tabTitle}</button>
            )}
          </nav>
        </div>
      </header>
    )
}