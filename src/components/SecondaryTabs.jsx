const SecondaryTabs = ({isSelected, tabs, selected, setSelected, setFetched, children}) => {
    const tabsWidth = 100/tabs.length

    if (isSelected) {
        return (
            <div className="SecondaryTabs">
                <ul className="nav nav-tabs d-flex">
                    {
                        tabs.map( (tab, idx) => {
    
                            const active = idx === selected ? 'active' : '';
    
                            return (
                                <li className="nav-item" key={ tab } style={{ width: `${tabsWidth}%` }}>
                                    <div className={ "nav-link " + active } style={{ cursor:"pointer" }} onClick={ () => {setSelected(idx); setFetched(false)}}>
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
    } else {
        return null;
    }
}

export default SecondaryTabs