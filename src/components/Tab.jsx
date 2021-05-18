import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Tab = ({data}) => {

    const server = 

`app.get('/api/simple/no-origin', (req.res) => {
    res.status(200).json({ title: 'Hello World!' })
})`;

    const request = data.header ? `fetch('${data.url}', '${data.header}')` : `fetch('${data.url}')`

    const console = "Access to fetch at 'https://cors-tutorial-server.herokuapp.com/api/simple/no-origin' from origin 'https://www.chuckchoi.me' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled."

    const sendReq = (data) => {
        if (data.header) {
            fetch(data.url, data.header)
        } else {
            fetch(data.url)
        }
    }

    return (
        <div className="Tab m-4">
            <p>Server</p>
                <SyntaxHighlighter language="javascript" style={a11yDark} lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}>
                    {server}
                </SyntaxHighlighter>
            <p>Request</p>
                <SyntaxHighlighter language="javascript" style={a11yDark} lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}>
                    {`${request}`}
                </SyntaxHighlighter>
            <button className="btn btn-primary" onClick={() => {sendReq(data)}}>Send Request</button>
            <p>Console</p>
                <SyntaxHighlighter language="javascript" style={a11yDark} lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}>
                    {`${console}`}
                </SyntaxHighlighter>
            <p>Response</p>
                <SyntaxHighlighter language="javascript" style={a11yDark} lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}>
                    {`${request}`}
                </SyntaxHighlighter>
        </div>
    )
}

export default Tab