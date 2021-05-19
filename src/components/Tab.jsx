import { useState, useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Tab = ({data, fetched, setFetched}) => {

    const server = data.server

    const request = data.header ? `fetch('${data.url}', '${JSON.stringify(data.header)}')` : `fetch('${data.url}')`;

    const console = data.console;

    const [response, setResponse] = useState('')

    const sendReq = (data) => {
        if (data.header) {
            setFetched(true)
            fetch(data.url, data.header).then(res => res.json()).then(json => JSON.stringify(json)).then(data => setResponse(`${data}`) )
        } else {
            setFetched(true)
            fetch(data.url).then(res => res.json()).then(json => JSON.stringify(json)).then(data => {setResponse(`${data}`)})
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
            <button className="btn btn-primary mx-auto d-block" onClick={() => {sendReq(data)}}>Send Request</button>
            {
                fetched ?
                <>
                {
                    console ?
                    <><p>Console</p>
                    <SyntaxHighlighter language="javascript" style={a11yDark} lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}>
                        {`${console}`}
                    </SyntaxHighlighter></>
                    :
                    ''
                }
                {
                    response ?
                    <><p>Response</p>
                    <SyntaxHighlighter language="javascript" style={a11yDark} lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}>
                        {`${response}`}
                    </SyntaxHighlighter></>
                    :
                    ''
                }
                </>
                :
                ''
            }
            
        </div>
    )
}

export default Tab