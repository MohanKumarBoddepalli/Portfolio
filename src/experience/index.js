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
            company: 'ABC Tech Solutions',
            duration: 'Jan 2020 - Present',
            description: 'Worked on web development projects using React and Node.js.',
            languages: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
        },
        {
            title: 'Software Engineer',
            company: 'ABC Tech Solutions',
            duration: 'Jan 2020 - Present',
            description: 'Worked on web development projects using React and Node.js.',
            languages: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
        },
        {
            title: 'Software Engineer',
            company: 'ABC Tech Solutions',
            duration: 'Jan 2020 - Present',
            description: 'Worked on web development projects using React and Node.js.',
            languages: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
        },
        {
            title: 'Software Engineer',
            company: 'ABC Tech Solutions',
            duration: 'Jan 2020 - Present',
            description: 'Worked on web development projects using React and Node.js.',
            languages: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
        },
        {
            title: 'Frontend Developer',
            company: 'XYZ Software',
            duration: 'May 2018 - Dec 2019',
            description: 'Collaborated on building user interfaces for various applications.',
            languages: ['JavaScript', 'Angular', 'HTML', 'CSS', 'TypeScript'],
        },
        // Add more experiences as needed
    ];

    return (
        <div className="experience-timeline-container">
            <div className="left-column">
                <h1>Your Name</h1>
                <p>
                    Hello, I'm Mohan Kumar Boddepalli, a passionate software engineer with a focus on web development
                    and crafting seamless user experiences. I thrive on working with a diverse array of cutting-edge
                    technologies, including React, Node.js, PostgreSQL, Redis, and more. My dedication to the field
                    extends beyond my professional life—I spend my free time exploring new technologies and actively
                    contributing to open-source projects, constantly pushing the boundaries of my expertise. My
                    unwavering commitment to continuous improvement empowers me to stay at the forefront of innovation.
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
                            className={index % 2 === 0 ? 'timeline-item' : 'timeline-item alt'}
                        >
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