import React from "react";

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header> Test Header</header>
      <main>{children}</main>
      <footer> Test Footer</footer>
    </>
  );
};

export default TestLayout;
