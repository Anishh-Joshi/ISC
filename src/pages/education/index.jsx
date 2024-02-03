import React from 'react'
import IdCard from '../../component/id-card'
import { FaUserGraduate } from 'react-icons/fa'
import certificate1 from '../../assets/logos/certification.jpg'

function Education() {
    const kuCourse = {
        "courses": [
            {
                "year_semester": "I/I",
                "subjects": [
                    { "subject_code": "MATH 101", "subject": "Calculus and Linear Algebra", "credit": 3 },
                    { "subject_code": "COMP 102", "subject": "Computer Programming (C)", "credit": 3 },
                ]
            },
            {
                "year_semester": "I/II",
                "subjects": [
                    { "subject_code": "MATH 104", "subject": "Advanced Calculus", "credit": 3 },
                    { "subject_code": "COMP 116", "subject": "Object-Oriented Programming (C++)", "credit": 3 },
                ]
            },
            {
                "year_semester": "II/I",
                "subjects": [
                    { "subject_code": "MATH 208", "subject": "Statistics and Probability", "credit": 3 },
                    { "subject_code": "MCSC 201", "subject": "Discrete Mathematics/Structure", "credit": 3 },
                    { "subject_code": "EEEG 202", "subject": "Digital Logic", "credit": 3 },
                    { "subject_code": "COMP 202", "subject": "Data Structures and Algorithms", "credit": 3 },
                ]
            },
            {
                "year_semester": "II/II",
                "subjects": [
                    { "subject_code": "MATH 207", "subject": "Differential Equations and Comp. Variables", "credit": 4 },
                    { "subject_code": "COMP 204", "subject": "Data Communication and Networking", "credit": 3 },
                    { "subject_code": "COMP 231", "subject": "Microprocessor and Assembly Language", "credit": 3 },
                    { "subject_code": "COMP 232", "subject": "Database Management Systems", "credit": 3 },
                ]
            },
            {
                "year_semester": "III/I",
                "subjects": [
                    { "subject_code": "COMP 307", "subject": "Operating Systems", "credit": 3 },
                    { "subject_code": "COMP 315", "subject": "Computer Architecture and Organization", "credit": 3 },
                    { "subject_code": "COMP 316", "subject": "Theory of Computation", "credit": 3 },
                    { "subject_code": "COMP 342", "subject": "Computer Graphics", "credit": 3 },
                ]
            },
            {
                "year_semester": "III/II",
                "subjects": [
                    { "subject_code": "COMP 343", "subject": "Information System Ethics", "credit": 3 },
                    { "subject_code": "COMP 302", "subject": "System Analysis and Design", "credit": 3 },
                    { "subject_code": "COMP 409", "subject": "Compiler Design", "credit": 3 },
                    { "subject_code": "COMP 314", "subject": "Algorithms and Complexity", "credit": 3 },
                    { "subject_code": "COMP 341", "subject": "Human-Computer Interaction", "credit": 3 },
                ]
            },
            {
                "year_semester": "IV/I",
                "subjects": [
                    { "subject_code": "COMP 401", "subject": "Software Engineering", "credit": 3 },
                    { "subject_code": "COMP 472", "subject": "Artificial Intelligence", "credit": 3 },
                    { "subject_code": "COMP 488", "subject": "Deep Learning & Neural Network", "credit": 3 },
                ]
            },
            {
                "year_semester": "IV/II",
                "subjects": [
                    { "subject_code": "MGTS 402", "subject": "Engineering Entrepreneurship", "credit": 3 },
                    { "subject_code": "COMP 486", "subject": "Software Dependability", "credit": 3 },
                    { "subject_code": "COMP 408", "subject": "Internship", "credit": 6 }
                ]
            }
        ]
    };

    const udemyCertification = {
        "course_content": [
            {
                "section": "Widget Graphic Manipulation",
                "lectures": [
                    { "title": "Rotated Box", "duration": "02:35" },
                    { "title": "Box Decoration", "duration": "03:08" },
                    { "title": "Transformations", "duration": "06:48" },
                    { "title": "Custom Painter", "duration": "10:28" }
                ],
                "assignment": { "questions": 1, "assignment_source_duration": "00:03" },
                "quiz": { "questions": null }
            },
            {
                "section": "Animation",
                "lectures": [
                    { "title": "Animation builder", "duration": "07:29" },
                    { "title": "Listener", "duration": "07:09" },
                    { "title": "Animated Widget", "duration": "13:30" }
                ],
                "assignment": { "questions": 1, "assignment_source_duration": "00:03" },
                "quiz": { "questions": null }
            },
            {
                "section": "Interactive Maps",
                "lectures": [
                    { "title": "Markers", "duration": "05:02" },
                    { "title": "Map interactions", "duration": "09:26" },
                    { "title": "Polylines", "duration": "04:54" }
                ],
                "assignment": { "questions": 1, "assignment_source_duration": "00:03" },
                "quiz": { "questions": null }
            },
            {
                "section": "Phone Integration",
                "lectures": [
                    { "title": "Permissions", "duration": "17:18" },
                    { "title": "Working with contacts", "duration": "19:51" },
                    { "title": "Taking pictures with the camera", "duration": "21:34" }
                ],
                "assignment": { "questions": 1, "assignment_source_duration": "00:03" },
                "quiz": { "questions": 1, "assignment_source_duration": "00:03" }
            },
            {
                "section": "Firebase Introduction and Authentication",
                "lectures": [
                    { "title": "Project setup", "duration": "12:58" },
                    { "title": "Flutter authentication", "duration": "05:57" },
                    { "title": "Anonymous authentication", "duration": "07:36" },
                    { "title": "Google authentication", "duration": "07:06" }
                ],
                "assignment": { "questions": 1, "assignment_source_duration": "00:03" },
                "quiz": { "questions": null }
            },
            {
                "section": "Firebase Storage and Database",
                "lectures": [
                    { "title": "Firebase real-time database", "duration": "29:03" },
                    { "title": "Firebase database set vs update", "duration": "16:06" },
                    { "title": "Firebase database find and findrange", "duration": "08:36" }
                ],
                "assignment": { "questions": 1, "assignment_source_duration": "00:03" },
                "quiz": { "questions": null }
            }
        ]
    }


    return (
        <div className=' p-8 w-screen text-white flex flex-col justify-center items-center '>
            <div className='flex text-[2rem] justify-center items-center'>
                <FaUserGraduate size={40} className='mr-4' />
                <h2>
                    Courses And Certification  🚀
                </h2>

            </div>
            <div className='w-[100%] space-x-5 p-8 flex justify-start items-center'>

                <IdCard />
                <div>
                    <div className='py-8 px-4 bg-[#181818] rounded-xl  mx-2 flex flex-col justify-start items-start'>
                        <h1 className='font-bold text-[1.6rem]'>Kathmandu University: Topics Covered</h1>
                        <h5 className='text-gray-500 text-[0.8rem]'>Note - The list only has major subjects of each semester.</h5>
                    </div>
                    <div className='grid grid-cols-3 p-2'>
                        {kuCourse.courses.map((course, index) => {
                            return (<div className='m-2'>
                                <h2 className='text-[1.5rem] font-bold'>Year {course.year_semester}</h2>
                                {course.subjects.map((yearly, ind) => {
                                    return <ul>
                                        <li className='flex justify-start items-center space-x-2'><h3 className='text-[#78f678]'>{yearly.subject_code}</h3> <h3>{yearly.subject}</h3> </li>
                                    </ul>
                                })}
                            </div>)
                        })}
                    </div>
                </div>
            </div>

            <div className='w-[100%] p-8 flex justify-end items-center'>
                <div>
                    <div className='py-8 mr-4 px-4 bg-[#181818] rounded-xl font-bold text-[1.6rem] mx-2 flex justify-start items-center'>
                        Exploring  Udemy : Topics Covered
                    </div>
                    <div className='grid grid-cols-2 p-2'>

                        {udemyCertification.course_content.map((course, index) => {
                            return (<div className='m-2'>
                                <h2 className='text-[1.5rem] font-bold'>{course.section}</h2>
                                {course.lectures.map((yearly, ind) => {
                                    return <ul>
                                        <li className='flex justify-start items-center space-x-2'><h3>{yearly.title}</h3><h3 className='text-[#78f678]'>{yearly.duration}</h3>  </li>
                                    </ul>
                                })}
                            </div>)
                        })}
                    </div>
                </div>

                <img className='rounded-xl h-[40rem] w-[60rem] object-contain' src={certificate1} />

            </div>
        </div>
    )
}

export default Education