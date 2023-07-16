// Conditional rendering in React allows you to display different UI components or content based on certain conditions. There are several ways to handle conditional rendering:

// 1. if-else statements:
function ExampleComponent({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserDashboard />;
  } else {
    return <LoginForm />;
  }
}

// 2. Ternary operator:
function ExampleComponent({ isLoggedIn }) {
  return isLoggedIn ? <UserDashboard /> : <LoginForm />;
}
