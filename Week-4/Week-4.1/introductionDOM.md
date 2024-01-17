# DOM Introduction

The Document Object Model (DOM) is a crucial API that serves as a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing dynamic access and manipulation of the content, structure, and style of a web page.

## Simple HTML Layout

A basic HTML layout is the foundation of a web page. It typically includes the essential elements such as `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>` tags. An example of a simple HTML layout is:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Web Page</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML page.</p>
  </body>
</html>
```

### Class and ID in HTML

Classes and IDs are used to apply styles and identify specific elements in HTML and CSS. A class is denoted by the class attribute, while an ID is denoted by the id attribute.

```html
<div class="container">
  <p id="uniqueParagraph">This is a unique paragraph.</p>
</div>
```

### Creating a Basic Calculator in HTML

A basic calculator can be implemented in HTML using form elements.

```html
<form>
  <input type="text" id="num1" placeholder="Enter number 1" />
  <input type="text" id="num2" placeholder="Enter number 2" />
  <button onclick="calculateSum()">Calculate Sum</button>
  <p id="result">Result:</p>
</form>

<script>
  function calculateSum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var sum = num1 + num2;
    document.getElementById("result").innerHTML = "Result: " + sum;
  }
</script>
```

## Understanding DOM and Making a Dynamic Website

Dynamic websites use the DOM to update content without requiring a full page reload. JavaScript is commonly used to manipulate the DOM dynamically.

### Getting Element by Classname and ID

JavaScript provides methods like getElementsByClassName and getElementById to access and manipulate DOM elements based on their class or ID.

```javascript
var elementsByClass = document.getElementsByClassName("exampleClass");
var elementById = document.getElementById("exampleId");
```

### Connecting Backend to Frontend

To connect the backend and frontend, a simple example involves creating a backend server that performs a sum operation. The frontend, using the fetch API, can then communicate with the server to obtain the sum and display the result.

#### Backend Sum Server (Node.js example)

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/sum", (req, res) => {
  const num1 = parseInt(req.query.num1);
  const num2 = parseInt(req.query.num2);
  const sum = num1 + num2;
  res.json({ result: sum });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

#### Frontend Fetch Example

```javascript
const num1 = 5;
const num2 = 10;

fetch(`http://localhost:3000/sum?num1=${num1}&num2=${num2}`)
  .then((response) => response.json())
  .then((data) => {
    console.log("Sum result:", data.result);
    // Display the result on the frontend as needed
  });
```

### Debouncing and Throttling

Debouncing and throttling are techniques used to control the rate at which a function is executed.

#### Debouncing:

Debouncing is a technique that ensures that time-consuming tasks don't fire so often, making them more efficient by delaying the execution of a function until after a certain period of inactivity. It is commonly used in scenarios where a function is triggered repeatedly, and you want to wait for a brief pause in the events before taking action.

```javascript
function debounce(func, delay) {
  let timeout;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(context, args), delay);
  };
}

// Usage
const debouncedFunction = debounce(calculateSum, 300);
```

#### Throttling:

Throttling, on the other hand, involves ensuring that the function is not executed more than once in a specified amount of time. It limits the rate at which a function can be called, ensuring a controlled flow of executions. Throttling is beneficial when you want to ensure that a function is not called more frequently than a defined interval.

```javascript
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const context = this;
    const args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Usage
const throttledFunction = throttle(calculateSum, 300);
```
