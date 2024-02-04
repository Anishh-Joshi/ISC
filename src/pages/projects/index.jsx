import React from 'react'
import { FaProjectDiagram, FaQuoteLeft } from 'react-icons/fa';
import Applications from '../../component/scrollable-view';
import Kupal1 from "../../assets/screenshots/kupallogin.png";
import Kupal2 from "../../assets/screenshots/kupaltimeline.png";
import Kupal3 from "../../assets/screenshots/kupalpost.png";
import Sanity1 from "../../assets/screenshots/sanitylogin.png";
import Sanity2 from "../../assets/screenshots/sanitytimeline.png";
import Sanity3 from "../../assets/screenshots/sanityreport.png";
import Footy from "../../assets/screenshots/ISC.png";
import Testimonials from '../../component/testimonials';
import Banner1 from '../../assets/logos/flutter.png'
import KupalBanner from '../../component/kupal-banner/banner1';


function Projects() {
    const projectData = [
        {
            "owner": "Kupal",
            "remark": "Kupal is a dating app designed for the University of Kathmandu, with user base of approximately 1900 students. The app was developed using Flutter and Firebase, with BLoC as the state management system.",
            "project": "Flutter & Firebase with BLoC ",
            "Rating": 5,
            "imageUrl": null
        },
        {
            "owner": "Sanity",
            "remark": "Sanity is a mental health assistant, capable of detecting the sentiment based on their interactions. It provides features such as finding the nearest psychiatrist with one-to-one chats. Additionally, it includes an integrated DASS21 test to predict depression.",
            "project": "Flutter & PostgreSQL with BLoC & Deep Learning",
            "Rating": 5,
            "imageUrl": null
        },
        {
            "owner": "Footy",
            "remark": "Footy is a retail website specializing in selling footwear. Developed using React, MySQL, and Redux, the platform serves as an online marketplace for footwear products.",
            "project": "React & MySQL with REDUX",
            "Rating": 0,
            "imageUrl": null
        }
    ];

    const projectJson = [
        {
            insides1: {
                img: Kupal1,
                sectionTitle: "Kupal",
                InsideBanner1: Banner1,
                OutsideBanner1: KupalBanner,
                sectiondesc: "Kupal is a dating app designed for the University of Kathmandu, targeting approximately 1900 students. The app was developed using Flutter and Firebase, with BLoC as the state management system.",
                listItems: [
                    "User authentication and profile management",
                    "Real-time chat functionality",
                    "Matching algorithm for potential matches",
                    "Integration with Firebase for backend services",
                    "BLoC for efficient state management"
                ]
            },
            insides2: {
                img: Kupal2,
                InsideBanner1:Banner1,
                OutsideBanner1:KupalBanner,
                sectionTitle: "Kupal Timeline",
                sectiondesc: "The Kupal Timeline provides a chronological view of user activities and interactions within the application. It showcases key features related to user engagement and profile management.",
                listItems: [
                    "Hit feature: Display the number of users who have expressed interest in your profile",
                    "Cover photo: Allow users to set and customize their cover photo on their timeline",
                    "Following/Unfollowing: Enable users to follow or unfollow other users, enhancing social connections",
                    "Privacy settings: Provide customizable privacy settings for user profiles",
                    "Activity log: Maintain a record of user interactions and engagements on the platform"
                    // Add more features as needed
                ]
            },
            insides3: {
                img: Kupal3,
                InsideBanner1:Banner1,
                OutsideBanner1:KupalBanner,
                sectionTitle: "Kupal Post",
                sectiondesc: "The Kupal Post section allows users to share and view posts. It provides a platform for users to showcase their main photo, display engagement metrics such as likes and comments, and highlights a featured comment.",
                listItems: [
                    "Main photo: Users can share a main photo along with their posts",
                    "Total likes: Display the total number of likes received for each post",
                    "Total comments: Show the total number of comments received for each post",
                    "Featured comment: Highlight one comment to provide additional context or emphasis",
                    "Engagement metrics: Showcase the popularity of posts through likes and comments"
                    // Add more features as needed
                ]
            }
        },
        {
            insides1: {
                img: Sanity1,
                InsideBanner1:Banner1,
                OutsideBanner1:KupalBanner,
                sectionTitle: "Sanity",
                sectiondesc: "Sanity is a mental health assistant app created with Flutter, BLoC, and PostgreSQL. The app is capable of detecting the sentiment of the user based on their interactions. It provides features such as finding the nearest psychiatrist and facilitating one-to-one chats. Additionally, Sanity includes an integrated DASS21 test to predict depression.",
                listItems: [
                    "Sentiment analysis: Detect the sentiment of users based on their interactions",
                    "Find nearest psychiatrist: Assist users in locating the nearest psychiatrist",
                    "One-to-one chat: Facilitate private one-to-one conversations between users and mental health professionals",
                    "DASS21 test: Integrated Depression, Anxiety, and Stress Scale for predicting depression"
                    // Add more features as needed
                ]
            },
            insides2: {
                img: Sanity2,
                InsideBanner1:Banner1,
                OutsideBanner1:KupalBanner,
                sectionTitle: "Sanity Timeline",
                sectiondesc: "The Sanity Timeline displays a chronological view of user activities and mental health logs. Key features include log tracking, log entries represented in visible colors, and sentiment analysis of the logs marked by different colors.",
                listItems: [
                    "Log tracking: Keep a record of user activities and interactions",
                    "Visible colors: Represent log entries using visually distinguishable colors",
                    "Sentiment analysis: Analyze the sentiment of mental health logs and mark them with different colors"
                    // Add more features as needed
                ]
            },
            insides3: {
                img: Sanity3,
                InsideBanner1:Banner1,
                OutsideBanner1:KupalBanner,
                sectionTitle: "Sanity Analysis",
                sectiondesc: "The Sanity Analysis section provides an in-depth analysis of user mental health scores. It compares the scores over time and offers insights into the user's mental well-being.",
                listItems: [
                    "Score analysis: Analyze and interpret mental health scores",
                    "Score comparison: Compare mental health scores over time",
                    "Insights: Provide insights into the user's mental well-being based on the analysis"
                    // Add more features as needed
                ]
            }
        },
        {
            insides1: {
                img: Footy,
                InsideBanner1:Banner1,
                OutsideBanner1:KupalBanner,
                sectionTitle: "Footy",
                sectiondesc: "Footy is a retail website primarily focused on footwear. The website provides a platform for users to explore and purchase a variety of footwear products.",
                listItems: [
                    "User-friendly landing page: Engage users with an attractive and intuitive landing page",
                    "Shopping cart functionality: Allow users to add and manage items in their shopping cart",
                    "Product catalog: Showcase a diverse catalog of footwear products for users to explore",
                    "Secure checkout process: Ensure a secure and seamless checkout experience for users",
                    "Responsive design: Optimize the website for a responsive and user-friendly experience on various devices"
                    // Add more features as needed
                ]
            },
            insides2: {
                img: Footy,
                InsideBanner1:Banner1,
                OutsideBanner1:KupalBanner,
                sectionTitle: "Footy Cart",
                sectiondesc: "The Footy Cart section focuses on the user's shopping cart experience. It provides features to manage and review items added to the cart before proceeding to checkout.",
                listItems: [
                    "View and edit cart items: Allow users to view and edit the items in their shopping cart",
                    "Quantity adjustments: Enable users to adjust the quantity of items in their cart",
                    "Remove items: Allow users to remove unwanted items from their shopping cart",
                    "Subtotal calculation: Display the subtotal based on the items and quantities in the cart",
                    "Proceed to checkout: Provide a seamless transition to the checkout process"
                    // Add more features as needed
                ]
            },
            insides3: {
                img: Footy,
                InsideBanner1:Banner1,
                OutsideBanner1:KupalBanner,
                sectionTitle: "Footy Shop",
                sectiondesc: "The Footy Shop section is the core of the retail website, where users can explore and make purchases from a wide range of footwear products.",
                listItems: [
                    "Product categorization: Categorize footwear products for easy navigation and exploration",
                    "Product details: Provide detailed information about each footwear product",
                    "Search functionality: Allow users to search for specific footwear products",
                    "Add to cart: Enable users to add desired products to their shopping cart",
                    "User reviews: Display user reviews and ratings for each footwear product"
                    // Add more features as needed
                ]
            }
        }
    ];

    return (
        <div className='w-screen p-8 flex flex-col justify-center items-center text-white mx-auto'>

            <div className='flex p-16 text-[2rem] justify-center items-center'>
                <FaProjectDiagram size={40} className='mr-4' />
                <h2>
                    Launching Success: Projects that Soared  🚀
                </h2>

            </div>
            <div className='w-screen flex items-center justify-between'>
                {
                    projectData.map((project, index) => {
                        return (<div key={index}>
                            <Testimonials project={project} />
                        </div>)
                    })
                }


            </div>
            {projectJson.map((p, i) => {
                return (<Applications key={i} index={i} insides={p} />)
            })}
        </div>
    )
}

export default Projects