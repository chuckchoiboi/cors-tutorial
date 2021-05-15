const SecondaryTabs = ({isSelected, tabs, selected, setSelected}) => {
    if (isSelected) {
        return (
            <div className="secondary-tabs">
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
            </div>
        )
    } else {
        return null;
    }
}

export default SecondaryTabs