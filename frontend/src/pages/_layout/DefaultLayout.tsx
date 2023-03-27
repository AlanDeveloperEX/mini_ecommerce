interface DefaultLayout {
  children: JSX.Element;
}

export const DefaultLayout: React.FC<DefaultLayout> = ({ children }) => {
  return <>{children}</>;
};
