// React fragments, also known as "empty tags" or "fragment syntax," allow you to return multiple elements from a component without adding an additional wrapper element. Fragments are useful when you need to group multiple elements without introducing a new parent element in the DOM.

// In the past, if you wanted to return multiple elements from a component, you had to wrap them inside a single parent element like this:
function ExampleComponent() {
  return (
    <div>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </div>
  );
}

// With React fragments, you can achieve the same result without the extra <div>:
function ExampleComponent() {
  return (
    <>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </>
  );
}

// Or you can also use <React.Fragment> syntax:
function ExampleComponent() {
  return (
    <React.Fragment>
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </React.Fragment>
  );
}
