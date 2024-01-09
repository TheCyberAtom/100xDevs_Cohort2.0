# Authentication

## Hashing

Hashing is the process of converting input data (such as passwords) into a fixed-size string of characters, usually a hash code. It's commonly used for securely storing and comparing passwords.

```javascript
const crypto = require("crypto");

// Hashing a password using SHA-256
const password = "mySecurePassword";
const hashedPassword = crypto
  .createHash("sha256")
  .update(password)
  .digest("hex");

console.log("Hashed Password:", hashedPassword);
```

### Key Points:

1. One-way Function:
   Hash functions are designed to be irreversible, making it challenging to retrieve the original input from the generated hash.

2. Fixed Output Size:
   Regardless of the input size, the hash function produces a fixed-size output.

3. Collision Resistance:
   A good hash function minimizes the likelihood of two different inputs producing the same hash value (collision).

4. Password Hashing:
   In authentication systems, user passwords are hashed and stored. During login attempts, the entered password is hashed, and the generated hash is compared with the stored hash.

## Encryption

Encryption involves converting plaintext into ciphertext to secure data during transmission or storage.

```javascript
const crypto = require("crypto");

// Encryption using AES-256-CBC
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);
const cipher = crypto.createCipheriv(algorithm, key, iv);

let encryptedData = cipher.update("Hello, World!", "utf-8", "hex");
encryptedData += cipher.final("hex");

console.log("Encrypted Data:", encryptedData);
```

### Key Points:

1. Algorithm and Key:
   Encryption involves using an encryption algorithm (e.g., AES-256) along with a key.
2. Symmetric and Asymmetric Encryption:
   Symmetric encryption uses the same key for both encryption and decryption.
3. Security:
   The security of encrypted data depends on the strength of the encryption algorithm and the confidentiality of the key.
4. Use Cases:
   Encryption is widely used to protect sensitive data during online transactions, communication over networks, and data storage.

## JSON Web Tokens (JWT)

JWT is a compact, URL-safe means of representing claims between two parties, commonly used for authentication.

```javascript
const jwt = require("jsonwebtoken");
const secretKey = "yourSecretKey";
const payload = { userId: 123, username: "john_doe" };
const token = jwt.sign(payload, secretKey, { expiresIn: "1h" });
console.log("JWT Token:", token);
```

### Key Points:

1. Structure:
   JWTs consist of a header, payload, and signature, base64-encoded and concatenated with dots.
2. Claims:
   The payload contains claims providing information about the user or the token itself.
3. Signing:
   JWTs are often signed with a secret key to ensure integrity.
4. Expiration:
   JWTs can have an expiration time, after which they are no longer valid.

## Local Storage

Local Storage is a web storage solution for persisting data on the client side.

```javascript
// Save data to local storage
localStorage.setItem("userToken", "xyz123");
// Retrieve data from local storage
const storedToken = localStorage.getItem("userToken");
console.log("Stored Token:", storedToken);
// Remove data from local storage
localStorage.removeItem("userToken");
```

### Key Points:

1. Key-Value Storage:
   Local Storage allows storing data in key-value pairs.

2. Persistence:
   Data in Local Storage persists even after the user closes the browser window.

3. Data Limitations:
   Local Storage has limitations on the amount of data that can be stored.

4. Security Considerations:
   Not suitable for storing sensitive information due to potential security risks; better for non-sensitive user-specific preferences or settings.
