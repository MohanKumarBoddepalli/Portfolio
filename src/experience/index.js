import './about.css'
import React, { useState, useRef, useEffect } from 'react';

const ExperienceTimeline = () => {
    const [scrollY, setScrollY] = useState(0);

    // Update the scroll position on scroll
    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const experiences = [
        {
            title: 'Software Engineer',
            company: 'EMD Systems',
            duration: 'July 2022',
            description: 'Worked on web development projects using React and Node.js.',
            languages: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
        },
        {
            title: 'EMD Systems',
            company: 'EMD Systems',
            duration: 'Jan 2021',
            description: 'Worked on web development projects using Postgres and Node.js.',
            languages: ['JavaScript', 'Postgres', 'Node.js', 'HTML', 'CSS'],
        },
        {
            title: 'career commenced',
            company: 'EMD Systems',
            duration: 'Aug 2021',
            description: 'Worked on web development projects using Javascript and Node.js.',
            languages: ['JavaScript', 'HTML', 'CSS'],
        }
        // Add more experiences as needed
    ];

    return (
        <div className="experience-timeline-container">
            <div className="left-column">
                <h1>Hello, </h1>
                <p>
                    I'm <b>Mohan Kumar Boddepalli</b>, a passionate software engineer with a focus on web development
                    and crafting seamless user experiences. I spend my free time exploring new technologies and 
                    actively constantly pushing the boundaries of my expertise. My
                    unwavering commitment to continuous improvement, empowers me to stay at the forefront of innovation.
                    I am driven by the desire to make a meaningful and positive impact through my endeavors across various
                    technologies. Let's shape a better future together!
                </p>
            </div>
            <div className="right-column">
                <h2>Experience</h2>
                <ul className="timeline">
                    {experiences.map((experience, index) => (
                        <li
                            key={index}
                            className={index % 2 === 0 ? 'timeline-item' : 'timeline-item alt'}>
                            <div className="timeline-content main">
                                <h3>{experience.title}</h3>
                                <p>{experience.company}</p>
                                <p>{experience.duration}</p>
                                <p>{experience.description}</p>
                                <ul>
                                    {experience.languages.map((language, i) => (
                                        <li key={i}>{language}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};



const Experience = () => {
    return (
        <section className="about-section">
            <ExperienceTimeline />
        </section>
    )
}

export default Experience;