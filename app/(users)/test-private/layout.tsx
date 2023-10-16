const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <body>
      <header className="bg-orange-300 h-16"> PrivateLayout Header </header>
      <main>{children}</main>
      <footer className="bg-red-400 h-16 mt-40"> PrivateLayout  Footer</footer>
    </body>
  );
};

export default PrivateLayout;
