import { useState, useEffect } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Tab = ({data, fetched, setFetched}) => {

    useEffect(() => {
        if (!fetched) {
            setResponse('')
            setClicked(false)
        }
    }, [fetched])

    const server = data.server

    const request = data.header ? `fetch('${data.url}', '${JSON.stringify(data.header)}')` : `fetch('${data.url}')`;

    const error = data.error;

    const [response, setResponse] = useState('')

    const [clicked, setClicked] = useState(false)

    const sendReq = (data) => {
        setClicked(true)
        if (data.header) {
            fetch(data.url, data.header).then(res => res.json()).then(json => JSON.stringify(json)).then(parsedData => {setResponse(`${data.response}

${parsedData}`); setFetched(true)} ).catch( error => setFetched(true))
        } else {
            fetch(data.url).then(res => res.json()).then(json => JSON.stringify(json)).then(parsedData => {setResponse(`${data.response}
            
Body: ${parsedData}`); setFetched(true)}).catch( error => setFetched(true))
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
                clicked && !fetched ?
                <h1>Loading Data...</h1>
                :
                <>
                {
                    fetched &&
                    <>
                    {
                        error &&
                        <><p>Error</p>
                        <SyntaxHighlighter language="javascript" style={a11yDark} lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}>
                            {`${error}`}
                        </SyntaxHighlighter></>
                    }
                    {
                        response &&
                        <><p>Response</p>
                        <SyntaxHighlighter language="javascript" style={a11yDark} lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}} wrapLines={true}>
                            {`${response}`}
                        </SyntaxHighlighter></>
                    }
                    </>
                }
                </>
            }
            
            
        </div>
    )
}

export default Tab