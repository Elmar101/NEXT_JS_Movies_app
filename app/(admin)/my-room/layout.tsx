'use client'
import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <body>
      <header className="bg-orange-300 h-16"> AdminLayout Header</header>
      <main>{children}</main>
      <footer className="bg-red-400 h-16 mt-60"> AdminLayout  Footer</footer>
    </body>
  );
};

export default AdminLayout;