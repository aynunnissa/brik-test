const Layout = ({ children }) => {
  return (
    <>
      <p>Header here</p>
      <main>{children}</main>
      <p>Footer</p>
    </>
  );
};

export default Layout;
