import React from "react";

export default function ContentLayout({ children }) {
    return (
        <main className="h-full">
            { children }
        </main>
    );
}