import React from "react";

export default function ContentLayout({ children }) {
    return (
        <main className="h-full">
            <section className="container mx-auto px-3 py-4 h-full grid grid-cols-8 grid-rows-2 gap-5">
                { children }
            </section>
        </main>
    );
}