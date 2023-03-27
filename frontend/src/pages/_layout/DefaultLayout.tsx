interface DefaultLayout {
  children: JSX.Element;
}

export const DefaultLayout: React.FC<DefaultLayout> = ({ children }) => {
  return (
    <>
      <h1>MENU</h1>
      <main>{children}</main>
    </>
  );
};
