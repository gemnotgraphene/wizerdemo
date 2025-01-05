// Courses.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Courses.css';
import courseImage1 from '../../../ImageVideo/courseImage1.jpg';
import courseImage2 from '../../../ImageVideo/courseImage2.jpg';
import courseImage3 from '../../../ImageVideo/courseImage3.jpg';
import courseImage4 from '../../../ImageVideo/courseImage4.jpg';
import courseImage5 from '../../../ImageVideo/courseImage5.jpg';

import Footer from '../../Footer';

function Courses() {
    const [courses] = useState([
        {
            id: 1,
            image: courseImage1,
            category: 'Language',
            title: 'Basic Japanese',
            duration: '2 Weeks',
            students: 150,
            level: 'Basic',
            price: '25$',
            lessons: 4,
        },
        {
            id: 2,
            image: courseImage2,
            category: 'Business',
            title: 'Introduction to Business',
            duration: '2 Weeks',
            students: 100,
            level: 'All levels',
            price: '25$',
            lessons: 9,
        },
        {
            id: 3,
            image: courseImage3,
            category: 'Photography',
            title: 'Learn Photography',
            duration: '2 Weeks',
            students: 100,
            level: 'All levels',
            price: '25$',
            lessons: 10,
        },
        {
            id: 4,
            image: courseImage4,
            category: 'Finance',
            title: 'Principles of Business Finance',
            duration: '2 Weeks',
            students: 100,
            level: 'Beginner',
            price: '25$',
            lessons: 9,
        },
        {
            id: 5,
            image: courseImage5,
            category: 'Art',
            title: 'The Art of Photography',
            duration: '2 Weeks',
            students: 100,
            level: 'Advanced',
            price: '25$',
            lessons: 10,
        },
    ]);

    return (
        <div className="courses-page">
            <h1>All Courses</h1>
            <div className="search-bar">
                <input type="text" placeholder="Search for a course..." />
                <button><i className="fa fa-search"></i></button>
            </div>
            <div className="courses-grid">
                {courses.map((course) => (
                    <div className="course-card" key={course.id}>
                        <div className="course-image-wrapper">
                            <img src={course.image} alt={course.title} className="course-image" />
                            <span className="course-category">{course.category}</span>
                        </div>
                        <div className="course-content">
                            <p className="course-author">by Gemma Nguyen</p>
                            <h3 className="course-title">{course.title}</h3>
                            <div className="course-meta">
                                <span><i className="fas fa-clock"></i> {course.duration}</span>
                                <span><i className="fas fa-users"></i> {course.students} Students</span>
                                <span><i className="fas fa-signal"></i> {course.level}</span>
                                <span><i className="fas fa-book"></i> {course.lessons} Lessons</span>
                            </div>
                            <div className="course-footer">
                                <span className="course-price">{course.price}</span>
                                <button className="view-more-btn">
                                     <Link to={`/course-detail/${course.id}`} state={{ course }}>
                                        View More
                                     </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pagination">
                <span className="page-number active">1</span>
            </div>
            <Footer />
        </div>
    );
}

export default Courses;
