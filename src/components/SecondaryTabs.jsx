const SecondaryTabs = ({isSelected, tabs, selected, setSelected, children}) => {
    if (isSelected) {
        return (
            <div className="secondary-tabs">
                <ul className="nav nav-tabs">
                    {
                        tabs.map( (tab, idx) => {
    
                            const active = idx === selected ? 'active' : '';
    
                            return (
                                <li className="nav-item" key={ tab }>
                                    <div className={ "nav-link " + active } style={{ cursor:"pointer" }} onClick={ () => setSelected(idx)}>
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