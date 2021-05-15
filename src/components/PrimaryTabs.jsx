const PrimaryTabs = ({tabs, selected, setSelected, setSecondarySelected, children}) => {

    return (
        <>
            <ul className="nav nav-tabs d-flex justify-content-around">
                {
                    tabs.map( (tab, idx) => {
                        const active = idx === selected ? 'active' : '';

                        return (
                            <li className="nav-item" key={ tab }>
                                <div className={ "nav-link " + active } style={{ cursor:"pointer" }} onClick={ () => { 
                                    setSelected(idx)
                                    setSecondarySelected(0)
                                    }}>
                                    { tab }
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            { children }
        </>
    )
}

export default PrimaryTabs