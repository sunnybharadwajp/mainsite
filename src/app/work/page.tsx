import { Download, ExternalLink } from 'lucide-react';

const WorkPage = () => {
	return (
		<>
			<div className="content-wrapper sub-nav flex justify-between text-sm">
				<div className="left">
					<ul className="left-links flex gap-2 ">
						<li>
							<a href="#1">Summary</a>
						</li>
						<li>
							<a href="#1">Technologies</a>
						</li>
						<li>
							<a href="#1">Experience</a>
						</li>
						<li>
							<a href="#1">Notable Projects</a>
						</li>
					</ul>
				</div>
				<div className="right">
					<ul className="right-links flex justify-between gap-3">
						<li className="sub-nav-btn flex items-center gap-1 font-semibold">
							<span className="btn-title">Resume</span>
							<a className="sub-link" href="/">
								<Download size={16} />
							</a>
							<a className="sub-link" href="/">
								<ExternalLink size={16} />
							</a>
						</li>

						<li className="sub-nav-btn flex items-center gap-1 font-semibold">
							<span className="btn-title">Github</span>

							<a className="sub-link" href="/">
								<ExternalLink size={16} />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="page-content pt-3">
				<section className="about-section content-wrapper">
					<h2 className="section-heading">In Short</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum impedit
						facilis nostrum assumenda recusandae facere repellat id accusamus deserunt
						enim obcaecati ipsa consectetur, similique laborum reprehenderit atque,
						voluptatum veritatis laboriosam.
					</p>
				</section>
				<div className="spacer">
					<hr />
				</div>
				<section className="about-section content-wrapper">
					<h2 className="section-heading">Technologies I work with</h2>
					<div className="technology-list">
						<div className="technology-list-item">
							<strong className="list-item-heading">
								Design, Research & Planning:
							</strong>
							<p>Figma, Adobe Suite, Maze, Hotjar, Smaply, GitHub Issues / JIRA</p>
						</div>
						<div className="technology-list-item">
							<strong className="list-item-heading">Development:</strong>
							<p>
								Languages: HTML, CSS, JavaScript, Python | Frameworks: React 19
								(Next.js, Remix), React Native(Expo), SvelteKit, Vue.js, Solid.js,
								Astro | Databases: SQL (MySQL, PostgreSQL, SQLite) - Prisma,
								Sequelize; NoSQL (MongoDB) - Atlas, Mongoose
							</p>
						</div>
						<div className="technology-list-item">
							<strong className="list-item-heading">Security & Testing:</strong>
							<p>Checkmarx, Sonar | Vitest, Jest, Playwright, Selenium</p>
						</div>
						<div className="technology-list-item">
							<strong className="list-item-heading">Deployment:</strong>
							<p>DevOps CI/CD - Docker, Kubernetes | Vercel, Google Cloud, AWS</p>
						</div>
						<div className="technology-list-item">
							<strong className="list-item-heading">Maintenance:</strong>
							<p>
								Sentry (Error Tracking) | New Relic, Datadog (Monitoring, Log
								Management)
							</p>
						</div>{' '}
					</div>
				</section>

				<div className="spacer">
					<hr />
				</div>
				<section className="about-section content-wrapper">
					<h2 className="section-heading">Work Experience</h2>
					<p className="mb-6">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid vero totam
						voluptatem possimus nisi soluta necessitatibus molestiae id sit eos.
					</p>

					<div className="experience-block">
						<h3 className="company">Chakra Design</h3>
						<p className="title">Founder, Chief Designer, Developer, 2019 — 2023</p>
						<div className="description">
							<p>
								Led an internal team of 4 alongside 7 contractors on international
								web based projects. We designed and developed applications,
								websites, UIs, brands, and upgraded outdated sites to modern
								technology stacks.
							</p>
							<ul>
								<li>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
									quaerat temporibus quod optio odio rem ipsam dolorem nobis atque
									illum sunt iste voluptatem delectus, esse blanditiis culpa modi
									debitis repellat.
								</li>
								<li>
									Amet ipsa reprehenderit provident sit labore, exercitationem,
									placeat illo culpa nam distinctio incidunt vel rem veniam
									explicabo ab fugit laboriosam asperiores blanditiis. Numquam,
									accusamus asperiores. Harum error ad corrupti et dolor fugit.
								</li>
							</ul>
							<p>
								We played a key role in achieving enhanced load times, better SEO,
								and user experience, leading to higher client satisfaction and
								boosting sales conversions.
							</p>
						</div>
					</div>

					<div className="experience-block">
						<h3 className="company">T-Hub Company</h3>
						<p className="title">Full Stack Web Developer, 2016 — 2019</p>
						<div className="description">
							<p>
								As the first developer (employee no. 37), I transitioned the company
								from WordPress and disconnected HTML files to a Django full-stack
								platform which handled the website as well as internal systems. I
								also developed tools that streamlined our team’s communication and
								management of 140+ startups at the Incubator.
							</p>

							<ul>
								<li>
									Designed over 40 landing pages for startup events, programs, and
									festivals that T-Hub conducted.
								</li>
							</ul>

							<p>
								My contribution had led to a standardized practice for all data
								management, collection and analysis
							</p>
						</div>
					</div>
					<div className="experience-block">
						<h3 className="company">ASB Communications</h3>
						<p className="title">
							Systems Administrator & Associate Account Manager, 2015 — 2016
						</p>
						<div className="description">
							<p>
								Set up IT systems for hardware/software access and permissions
								management. Integrated Salesforce CRM, improving employee and
								customer experience. Also handled web-based needs—splash pages,
								online marketing, and analytics for major Indian community events
								nationally in the United States, including 'Diwali at Times Square'
								and the 'All Star Cricket League.'
							</p>
						</div>
					</div>
					<div className="experience-block">
						<h3 className="company">Kitsplit</h3>
						<p className="title">Designer, 2015</p>
						<div className="description">
							<p>
								Collaborated with the Founder and a team of 4 in NYU Stern's
								"Turning Ideas into Reality" course (Spring 2015) to design a
								minimum viable product. Conducted user research with over 500
								potential users and market analysis, growing the startup from a
								prototype phase to having 80+ active users in 6 months. The company
								is still operational today with 11,000+ active users and continues
								to thrive on the foundations we had built.
							</p>
						</div>
					</div>
				</section>
				<div className="spacer">
					<hr />
				</div>
				<section className="about-section content-wrapper">
					<h2 className="section-heading">Notable Projects</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum impedit
						facilis nostrum assumenda recusandae facere repellat id accusamus deserunt
						enim obcaecati ipsa consectetur, similique laborum reprehenderit atque,
						voluptatum veritatis laboriosam.
					</p>
				</section>
			</div>
		</>
	);
};

export default WorkPage;
