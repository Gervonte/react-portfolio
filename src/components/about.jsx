import React from 'react';
import myImage from '../img/myImage.png';

class About extends React.Component {
	constructor() {
		super();
		this.state = {
			about_me: [
				{
					id: 'first-p-about',
					content:
						'I am a Bahamian Software Engineer with a Bachelor’s of Science degree in Computer Science that I earned in 2020 from Florida Polytechnic University. Shortly after graduating, I worked at a Series B Fintech Startup (Nova Credit) for ~2 years, initially remotely from Florida but I moved to San Francisco for a year to continue my work as a  Full Stack developer.  At Nova Credit I worked on the Credit Passport product that allows for international credit history to be used in the US and other destinations. During this time I contributed to the codebase primarily using Javascript/Typescript, Node, React, Express, Jest and Postgres. In particular my most recent work here involved converting the internal ‘Credit Passport’ API to a public API to allow for expansion in a multi-million dollar partnership with HSBC.'
				},
				{
					id: 'second-p-about',
					content:
						'Since then I’ve returned home to The Bahamas where I’ve primarily studied and honed my coding/ general software engineering skills daily through LeetCode (200+ solved), coding projects, Udemy courses and system design interview practice while looking for a new role.'
				}
			]
		};
	}

	render() {
		return (
			<section id='about' className='about-mf sect-pt4 route'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<div className='box-shadow-full'>
								<div className='row'>
									<div className='col-md-6'>
										<div className='row'>
											<div
												className='col-sm-6 col-md-5'
												style={{ margin: '0 auto' }}
											>
												<div
													className='about-img'
													style={{ textAlign: 'center' }}
												>
													<img
														className='img-fluid rounded b-shadow-a'
														alt=''
													/>
												</div>
											</div>
										</div>
									</div>
									<div className='col-md-0'>
										<div className='about-me pt-4 pt-md-0'>
											<div className='title-box-2'>
												<h5 className='title-left'>About Me</h5>
											</div>
											{this.state.about_me.map(content => {
												return (
													<p className='lead' key={content.id}>
														{content.content}
													</p>
												);
											})}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default About;
