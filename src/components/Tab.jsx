const Tab = ({data}) => {

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
                <pre>
                app.get('api/simple/no-origin', (req, res) =&gt; &#123;
                hello
                &#125;)
                </pre>
            <p>Request</p>
            <button className="btn btn-primary" onClick={() => {sendReq(data)}}>Send Request</button>
            <p>Console</p>
            <p>Response</p>
        </div>
    )
}

export default Tab