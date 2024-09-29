function MainInformation() {
	return (
		<div className='main'>
			<h4 className='main_companyName'>weather</h4>
			<div className='main-info'>
				<div className='main-info-primary'>
					<h1>
						<span id='temp'></span>
						<span className='degreeSign'>&#176;</span>
					</h1>
				</div>
				<div className='main-info-secondary'>
					<h2 className='main-info-secondary_location' id='location'></h2>
					<h4 className='main-info-secondary_date' id='date'></h4>
				</div>
				<img className='main-info_image' src='' alt='' id='image' />
			</div>
		</div>
	);
}

export default MainInformation;
