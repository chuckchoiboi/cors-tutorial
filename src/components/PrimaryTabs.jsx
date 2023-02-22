const PrimaryTabs = ({
	tabs,
	selected,
	setSelected,
	setSecondarySelected,
	setFetched,
	children,
}) => {
	return (
		<div className="PrimaryTabs">
			<ul className="nav nav-tabs d-flex">
				{tabs.map((tab, idx) => {
					const active = idx === selected ? 'active' : '';

					return (
						<li className="nav-item" key={tab}>
							<div
								className={'nav-link ' + active}
								style={{ cursor: 'pointer' }}
								onClick={() => {
									setSelected(idx);
									setSecondarySelected(0);
									setFetched(false);
								}}
							>
								{tab}
							</div>
						</li>
					);
				})}
			</ul>
			{children}
		</div>
	);
};

export default PrimaryTabs;
