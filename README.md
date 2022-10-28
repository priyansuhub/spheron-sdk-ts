
# Spheron SDK TS

The Spheron SDK implements the exposed endpoints provided in SwaggerUI

[Swagger UI](https://api-v2.spheron.network/docs/rest-api)




# Run Locally

Clone the project

```bash
  git clone https://github.com/priyansuhub/spheron-sdk-ts.git
```

Go to the project directory

```bash
  cd spheron-sdk-ts/src
```

Install dependencies

```bash
  npm install
```

```bash
  npm run build
```

# Test

Note: 

Each test functions has no parameters

Output is console logged

Functions with parameters to be looked on carefully

Uncomment the test function

  ```
    cd src/test
    tsc && node dist/test.js
  ```

# SDK Classes

#### Abstract base class 

```http
  Base class
```

| Base | API     | Description                  |
| :-------- | :------- | :-------------------------   |
| `constructor` | `(key: string)` | **Required**. User's API key   |
| `method` | `patchData<T>(endpoint: string, value: any): Promise<T>` |  returns PATCH data response |
| `method` | `putData<T>(endpoint: string, value: any): Promise<T>` |  returns PUT data response |
| `method` | `postData<T>(endpoint: string, value: any): Promise<T>` |  returns POST data response |
| `method` | `deleteDataParam<T>(endpoint: string, value: string): Promise<T>` |  returns DELETE data response |
| `method` | `deleteData<T>(endpoint: string): Promise<T>` |  returns DELETE data response |
| `method` | `getData<T>(endpoint: string): Promise<T>` |  returns GET data response |
| `method` | `patchDataEmpty<T>(endpoint: string): Promise<T>` |  returns PATCH data response |
| `method` | `postDataEmpty<T>(endpoint: string): Promise<T>` |  returns POST data response |
| `method` | `async getDataParam<T>(endpoint: string): Promise<T> ` |  returns GET data response |

#### Organization class extends base class

```http
  Organization class
```

| Base | API     | Description                  |
| :-------- | :------- | :-------------------------   |