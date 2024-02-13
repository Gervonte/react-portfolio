import React from 'react';

//Educative
import educative from '../img/educative-projects/Educative Projects.png';
import ebookReader from '../img/educative-projects/Ebook Reader.png';
import ecommerce from '../img/educative-projects/Ecommerce.png';
import musicPlayer from '../img/educative-projects/Music Player.png';
import textExtractor from '../img/educative-projects/Text Extractor.png';
import webScraping from '../img/educative-projects/Web Scraping.png';

//Leetcode
import leetcode from '../img/Leetcode.png';

//Udemy
import udemyreact from '../img/udemy-courses/Udemy-React.png';
import udemynode from '../img/udemy-courses/Udemy-Node.png';
import albumList from '../img/udemy-courses/Album List.png';
import chatApp from '../img/udemy-courses/Chat App.png';
import taskManager from '../img/udemy-courses/Task Manager.png';

//Conquer
import conquer from '../img/conquer/conquer.jpeg';
import conquer2 from '../img/conquer/Conquer2.png';

class Portfolio extends React.Component {
	render() {
		return (
			<section id='work' className='portfolio-mf sect-pt4 route'>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-12'>
							<div className='title-box text-center'>
								<h3 className='title-a'>Portfolio</h3>
								<p className='subtitle-a'>
									Here are some of the things I've been working on...
								</p>
								<div className='line-mf'></div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-12'>
							<div className='work-box'>
								<a href={educative} data-lightbox='gallery-vmarine'>
									<div className='work-img'>
										<img src={educative} alt='' className='img-fluid' />
									</div>
									<div className='work-content'>
										<div className='row'>
											<div className='col-sm-8'>
												<h2 className='w-title'>
													30 Educative.io Guided Projects
												</h2>
												<div className='w-more'>
													<span className='w-ctegory'>
														ReactJS, Python, Angular and various other tools and
														programming languages
													</span>
												</div>
											</div>
											<div className='col-sm-4'>
												<div className='w-like'>
													<span className='ion-ios-plus-outline'></span>
												</div>
											</div>
										</div>
									</div>
								</a>
								<a
									href={ebookReader}
									data-lightbox='gallery-vmarine'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={ecommerce}
									data-lightbox='gallery-vmarine'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={musicPlayer}
									data-lightbox='gallery-vmarine'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={textExtractor}
									data-lightbox='gallery-vmarine'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={webScraping}
									data-lightbox='gallery-vmarine'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
							</div>
						</div>
						<div className='col-md-12'>
							<div className='work-box'>
								<a href={leetcode} data-lightbox='gallery-aguadeluz'>
									<div className='work-img'>
										<img src={leetcode} alt='' className='img-fluid' />
									</div>
									<div className='work-content'>
										<div className='row'>
											<div className='col-sm-8'>
												<h2 className='w-title'>Leetcode</h2>
												<div className='w-more'>
													<span className='w-ctegory'>Javascript</span>{' '}
												</div>
											</div>
											<div className='col-sm-4'>
												<div className='w-like'>
													<span className='ion-ios-plus-outline'></span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className='col-md-12'>
							<div className='work-box'>
								<a href={udemyreact} data-lightbox='gallery-todo'>
									<div className='work-img'>
										<img src={udemyreact} alt='' className='img-fluid' />
									</div>
									<div className='work-content'>
										<div className='row'>
											<div className='col-sm-8'>
												<h2 className='w-title'>Udemy Courses</h2>
												<div className='w-more'>
													<span className='w-ctegory'>ReactJS Redux Node</span>
													{/*} / <span className="w-date">18 Sep. 2018</span>*/}
												</div>
											</div>
											<div className='col-sm-4'>
												<div className='w-like'>
													<span className='ion-ios-plus-outline'></span>
												</div>
											</div>
										</div>
									</div>
								</a>
								<a
									href={udemynode}
									data-lightbox='gallery-todo'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={albumList}
									data-lightbox='gallery-todo'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={chatApp}
									data-lightbox='gallery-todo'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={taskManager}
									data-lightbox='gallery-todo'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
							</div>
						</div>
						<div className='col-md-12'>
							<div className='work-box'>
								<a href={conquer} data-lightbox='gallery-medlingos'>
									<div className='work-img'>
										<img src={conquer} alt='' className='img-fluid' />
									</div>
									<div className='work-content'>
										<div className='row'>
											<div className='col-sm-8'>
												<h2 className='w-title'>Conquer | Android Game</h2>
												<div className='w-more'>
													<span className='w-ctegory'>
														Unity Google Play Store
													</span>
												</div>
											</div>
											<div className='col-sm-4'>
												<div className='w-like'>
													<span className='ion-ios-plus-outline'></span>
												</div>
											</div>
										</div>
									</div>
								</a>
								<a
									href={conquer2}
									data-lightbox='gallery-medlingos'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
							</div>
						</div>
						{/* <div className='col-md-4'>
							<div className='work-box'>
								<a href={stock} data-lightbox='gallery-smth'>
									<div className='work-img'>
										<img src={stock} alt='' className='img-fluid' />
									</div>
									<div className='work-content'>
										<div className='row'>
											<div className='col-sm-8'>
												<h2 className='w-title'>Lorem Ipsum</h2>
												<div className='w-more'>
													<span className='w-ctegory'>MERN</span>
												</div>
											</div>
											<div className='col-sm-4'>
												<div className='w-like'>
													<span className='ion-ios-plus-outline'></span>
												</div>
											</div>
										</div>
									</div>
								</a>
								<a
									href={stock1}
									data-lightbox='gallery-smth'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={stock2}
									data-lightbox='gallery-smth'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={stock3}
									data-lightbox='gallery-smth'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={stock4}
									data-lightbox='gallery-smth'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={stock5}
									data-lightbox='gallery-smth'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
							</div>
						</div>
						<div className='col-md-4'>
							<div className='work-box'>
								<a href={stock} data-lightbox='gallery-mf'>
									<div className='work-img'>
										<img src={stock} alt='' className='img-fluid' />
									</div>
									<div className='work-content'>
										<div className='row'>
											<div className='col-sm-8'>
												<h2 className='w-title'>Lorem Ipsum</h2>
												<div className='w-more'>
													<span className='w-ctegory'>
														HTML5 CSS3 Bootstrap MERN
													</span>
												</div>
											</div>
											<div className='col-sm-4'>
												<div className='w-like'>
													<span className='ion-ios-plus-outline'></span>
												</div>
											</div>
										</div>
									</div>
								</a>
								<a
									href={stock1}
									data-lightbox='gallery-mf'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={stock2}
									data-lightbox='gallery-mf'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={stock3}
									data-lightbox='gallery-mf'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={stock4}
									data-lightbox='gallery-mf'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
								<a
									href={stock5}
									data-lightbox='gallery-mf'
									style={{ display: 'none' }}
								>
									jsx-a11y/anchor-has-content warning
								</a>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		);
	}
}

export default Portfolio;
