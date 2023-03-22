import React from "react"

export default function Header() {

    return (
        <header className="bg-slate-200" >
        <div className="container mx-auto flex justify-between items-center h-16" >
          <a>Logo</a>
          <nav>
            <a>Community</a>
            <a>Stackies</a>
          </nav>
        </div>
      </header>
    )
}