const SecondaryTabs = ({isSelected, tabs, selected, setSelected, children}) => {
    if (isSelected) {
        return (
            <>
                <ul className="nav nav-tabs d-flex justify-content-around">
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
            </>
        )
    } else {
        return null;
    }
}

export default SecondaryTabs