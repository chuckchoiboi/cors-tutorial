const PrimaryTabs = ({tabs, selected, setSelected, children}) => {

    return (
        <div>
            <ul className="nav nav-tabs">
                {
                    tabs.map( tab => {

                        const active = tab === selected ? 'active' : '';

                        return (
                            <li className="nav-item" key={ tab }>
                                <div className={ "nav-link " + active } style={{ cursor:"pointer" }} onClick={ () => setSelected(tab)}>
                                    { tab }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            { children }
        </div>
    )
}

export default PrimaryTabs