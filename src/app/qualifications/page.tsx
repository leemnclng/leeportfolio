import React from 'react';
import ExperienceItemComponent from './components/experienceItemComponent';
import EducationItemComponent from './components/educationItemComponent';

export default function Qualifications() {
	return (
		<div className='mt-10 flex flex-col text-7xl font-bold'>
			{/* Experiences */}
			<div className='h-screen'>
				<h1 className='flex justify-start mb-8 text-zinc-700 ml-4'>
					Experience
				</h1>
				<ExperienceItemComponent
					date='2023'
					startMonth='August'
					endMonth='Present'
					positionLabel='Intern'
					position='Web Developer Intern'
					companyName='Asurion Hong Kong Limited - ROHQ | BGC, Taguig City'
					content={[
						`Currently working on an internal project that involves developing a web-based system to be utilized by their employees, aiming to
						enhance productivity.`,
						'aldjakhsdfhasd'
					]}
					firstChild={true}
				/>
				<ExperienceItemComponent
					date='2023'
					startMonth='May'
					endMonth='August'
					positionLabel='Intern'
					position='Backend Developer | Web Developer Intern'
					companyName='Highly Succeed, Inc. | Mandaluyong City'
					content={[
						'Designed, developed and tested web applications.',
						'Adapted and understood Scrum methodologies.',
						`Participated in creating the server side of company's R&D project using REST API.`,
						'Integrated third-party APIs from external applications into web platforms.',
						`Assisted exclusively in one of the company's projects, using ReactJS and Node.js to address bug fixes or implement new features based on the assigned ticket.`
					]}
					lastChild={true}
				/>
			</div>
			{/* Education */}
			<div className='h-screen'>
				<h1 className='flex justify-center mb-8 text-zinc-700 mt-14'>
					Education
				</h1>
				<div>
					<EducationItemComponent
						date='2024'
						startMonth='August 2019'
						endMonth='January 2024'
						course='Bachelor of Science in Computer Engineering'
						school='Far Easter University - Alabang'
						location='Filinvest City, Alabang, Muntinlupa City'
					/>
				</div>
				<div className='mt-8'>
					<EducationItemComponent
						date='2019'
						startMonth='June 2013'
						endMonth='February 2019'
						course='High School - Senior High School - STEM'
						school='Muntinlupa National High School - Main'
						location='Muntinlupa City'
					/>
				</div>
			</div>

			{/* Accomplishments */}
			{/* Certifications */}
		</div>
	)
}