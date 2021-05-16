const Tab = ({data}) => {

    const sendReq = (data) => {
        if (data.header) {
            fetch(data.url, data.header)
        } else {
            fetch(data.url)
        }
    }

    return (
        <div className="Tab">
            <p>Server</p>
            <p>Request</p>
            <button className="btn btn-primary" onClick={() => {sendReq(data)}}>Send Request</button>
            <p>Console</p>
            <p>Response</p>
        </div>
    )
}

export default Tab