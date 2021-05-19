const baseURL = 'https://cors-tutorial-server.herokuapp.com/api'

const simpleData = [
    {
      url: baseURL + '/simple/no-origin',
      console: 
`Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/simple/no-origin' from origin 'https://www.chuckchoi.me' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.`,
      server: 
`app.get('/api/simple/no-origin', (req, res) => {
  res.status(200).json({ title: 'Hello World!' })
})`,
    },
    {
      url: baseURL + '/simple/wildcard-origin',
      server: 
`app.get('/api/simple/wildcard-origin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.status(200).json({ title: 'Hello World!' })
})`
    },
    {
      url: baseURL + '/simple/bad-origin',
      console: 
`Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/simple/bad-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.website.notcool' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.`,
      server: 
`app.get('/api/simple/bad-origin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://www.website.notcool")
  res.status(200).json({ title: 'Hello World!' })
})`
    },
    {
      url: baseURL + '/simple/good-origin',
      server: 
`app.get('/api/simple/good-origin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")
  res.status(200).json({ title: 'Hello World!' })
})`
    }
  ]

  const preflightData = [
    {
      url: baseURL + '/preflight/bad-origin',
      console: "Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/preflight/bad-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: Response to preflight request does not pass access control check: The 'Access-Control-Allow-Origin' header has a value 'https://www.website.notcool' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.",
      header: {
        method: 'DELETE'
      },
      server: 
`app.options('/api/preflight/bad-origin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://www.website.notcool")
  res.status(204).end()
})`
    },
    {
      url: baseURL + '/preflight/bad-method',
      header: {
        method: 'DELETE'
      },
      console: "Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/preflight/bad-method' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: Method DELETE is not allowed by Access-Control-Allow-Methods in preflight response.",
      server: 
`app.options('/api/preflight/bad-method', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")
  res.status(204).end()
})`
    },
    {
      url: baseURL + '/preflight/req-bad-origin',
      header: {
        method: 'DELETE'
      },
      console: "Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/preflight/req-bad-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header has a value 'https://www.website.notcool' that is not equal to the supplied origin. Have the server send the header with a valid value, or, if an opaque response serves your needs, set the request mode to 'no-cors' to fetch the resource with CORS disabled.",
      server: 
`app.options('/api/preflight/req-bad-origin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")
  res.header("Access-Control-Allow-Methods", "DELETE")
  res.status(204).end()
})

app.delete('/api/simple/req-bad-origin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://www.website.notcool")
  res.status(200).json({ title: 'Goodbye World!' })
})`
    },
    {
      url: baseURL + '/preflight/good-request',
      header: {
        method: 'DELETE'
      },
      server: 
`app.options('/api/preflight/good-request', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")
  res.header("Access-Control-Allow-Methods", "DELETE")
  res.status(204).end()
})

app.delete('/api/simple/good-request', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")
  res.status(200).json({ title: 'Goodbye World!' })
})`
    }
  ]

  const credentialedData = [
    {
      url: baseURL + '/credentialed/wildcard-origin',
      header: {
        credentials: 'include'
      },
      console: "Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/credentialed/wildcard-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request credentials mode is 'include'.",
      server: 
`app.get('/api/credentialed/wildcard-origin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.status(200).json({ title: 'Hello World!' })
})`
    },
    {
      url: baseURL + '/credentialed/good-origin',
      header: {
        credentials: 'include'
      },
      console: "Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/credentialed/good-origin' from origin 'https://chuckchoiboi.github.io' has been blocked by CORS policy: The value of the 'Access-Control-Allow-Credentials' header in the response is '' which must be 'true' when the request credentials mode is 'include'.",
      server: 
`app.get('/api/credentialed/good-origin', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")
  res.status(200).json({ title: 'Hello World!' })
})`
    },
    {
      url: baseURL + '/credentialed/good-request',
      header: {
        credentials: 'include'
      },
      server: 
`app.get('/api/credentialed/good-request', (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://chuckchoiboi.github.io")
  res.header("Access-Control-Allow-Credentials", "true")
  res.status(200).json({ title: 'Hello World!' })
})`
    }
]

export {simpleData, preflightData, credentialedData}