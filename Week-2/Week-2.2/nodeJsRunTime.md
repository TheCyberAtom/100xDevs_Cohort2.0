### ECMAScript

ECMAScript is a scripting language specification upon which JavaScript is based. It defines the rules and features that a scripting language should have. JavaScript adheres to the ECMAScript specifications, providing a standardized foundation for web development.

### JavaScript

JavaScript is a dynamic and versatile scripting language used for web development. It conforms to the ECMAScript specifications, but it also includes additional features not covered by ECMAScript, such as the Document Object Model (DOM) and functions like `setTimeout`. Popular JavaScript engines include V8 (used in Chrome) and SpiderMonkey (used in Firefox).

### Node.js

Node.js is a JavaScript runtime environment that enables the execution of JavaScript code on the server side. It is built on the V8 JavaScript runtime engine developed by Google. Node.js allows developers to use JavaScript for server-side scripting, providing a non-blocking, event-driven architecture.

### Bun.js

Bun.js is a JavaScript runtime designed from scratch to cater to the modern JavaScript ecosystem. Notably, it is implemented in the Zig programming language, providing a performant and efficient runtime environment for running JavaScript code.

### HTTP (Hypertext Transfer Protocol)

HTTP is a communication protocol used for transferring data on the World Wide Web. It defines a set of rules for the exchange of information between a client (such as a web browser) and a server. HTTP operates over a connection, typically initiated by the client, and it is the foundation for data communication on the web.

### HTTP Protocol Elements

- **Client-side considerations:**

  1. Protocol (HTTP/HTTPS)
  2. Address (URL/IP/Port)
  3. Route
  4. Headers, body, and query parameters
  5. Method

- **Server-side considerations:**
  1. Response Header
  2. Response Body
  3. Status Code

### URL Breakdown

Breaking down the URL `https://chat.openai.com/backend-api/conversation`:

- Protocol: `https`
- URL: `chat.openai.com`
- Route: `backend-api/conversation`

### What Happens When You Search "google.com" in Your Browser

1. **URL Parsing:**

   - The browser parses the URL to extract the protocol, domain, and any additional path or query parameters.

2. **DNS Resolution:**

   - The browser performs a DNS (Domain Name System) lookup to translate the human-readable domain "google.com" into an IP address. This step is essential for locating the server on the internet.

3. **Establishing a Connection:**

   - The browser establishes a TCP (Transmission Control Protocol) connection with the server at the resolved IP address. This involves a three-way handshake to ensure a reliable connection.

4. **HTTP Request:**

   - The browser sends an HTTP (Hypertext Transfer Protocol) request to the server. The request includes information such as the requested resource ("/" for the homepage), the method (usually "GET" for fetching resources), and headers.

5. **Server Processing:**

   - Google's servers receive the request and process it. In the case of the Google homepage, the server generates the necessary HTML, CSS, and JavaScript to render the page.

6. **HTTP Response:**

   - The server sends an HTTP response back to the browser. The response includes the requested HTML document, along with additional resources such as CSS stylesheets and JavaScript files.

7. **Rendering:**
   - The browser parses the received HTML and render the frontend.

### Common Method, you send to backend servers

1. **GET**
2. **POST**
3. **PUT**
4. **DELETE**

### Common HTTP Status Codes

| Status Code | Status                | Description                                                                                       |
| ----------- | --------------------- | ------------------------------------------------------------------------------------------------- |
| 200         | OK                    | The request was successful.                                                                       |
| 201         | Created               | A new resource was successfully created.                                                          |
| 204         | No Content            | The server processed the request, but no content is sent in the response.                         |
| 400         | Bad Request           | The server cannot understand the request due to a client error.                                   |
| 401         | Unauthorized          | Authentication is required to access the resource.                                                |
| 403         | Forbidden             | The client does not have permission to access the resource.                                       |
| 404         | Not Found             | The requested resource could not be found.                                                        |
| 405         | Method Not Allowed    | The specified method is not allowed for the resource.                                             |
| 500         | Internal Server Error | An unexpected condition was encountered on the server.                                            |
| 502         | Bad Gateway           | The server, acting as a gateway, received an invalid response from an upstream server.            |
| 503         | Service Unavailable   | The server is not ready to handle the request, often due to temporary overloading or maintenance. |

#### Note: A server can host multiple application and multiple domains can point to same server.
