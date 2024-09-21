export const RoleCondition = ({ role }) => {
  if (role == "admin") {
    return <div>Admin dashboard</div>;
  } else if (role == "user") {
    return <div>User Dashboard</div>;
  }
  return <div>Access Denied</div>;
};

// switch (role) {
//   case "admin": {
//     return <div>Admin dashboard</div>;
//   }
//   case "user": {
//     return <div>User Dashboard</div>;
//   }
//   default: {
//     return <div>Access Denied</div>;
//   }
// }
