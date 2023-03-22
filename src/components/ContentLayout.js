import React from "react";

export default function ContentLayout({ children }) {
    return (
        <main className="bg-slate-100 h-[calc(100vh-4rem)]">
            <section className="container mx-auto px-3 bg-white py-4 h-full grid grid-cols-8 grid-rows-2 gap-5">
                { children }
            </section>
        </main>
    );
}