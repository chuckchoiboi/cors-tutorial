const PrimaryTabs = ({tabs}) => {
    return (
        <div>
            <ul className="nav nav-tabs">
                {
                    tabs.map( tab => {
                        return (
                            <li className="nav-item" key={ tab }>
                                <a className="nav-link" href="/">
                                    { tab }
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PrimaryTabs