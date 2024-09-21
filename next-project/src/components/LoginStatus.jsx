export const LoginStatus = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <div>Logged in</div>;
  }
  return <div>Please Log In</div>;
};
