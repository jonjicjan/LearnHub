import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Course.css';
import AIAssistant from './ai/AIAssistant';
import Loader from './ai/Loader';
//import { Loader } from 'lucide-react';

const courses = [
  {
    title: "Basic Python",
    level: "Beginner",
    imgSrc: "https://preview.redd.it/rxezjyf4ojx41.png?width=1080&crop=smart&auto=webp&s=38b346ba426f740eefcde2c6dfb23c5e6e810bc9",
    url : "https://www.youtube.com/watch?v=OZIRAavoGng&t=2s"
  },
  {
    title: "Java",
    level: "Beginner",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoWeO_TQrvig8IbtxBaWO-CN11GgiogCW6m8R5s0eqJX_vEKpBXZpaPWm3PEQ3Y0cSycE&usqp=CAU",
    url : "https://www.youtube.com/watch?v=bm0OyhwFDuY&t=26s"
  },
  {
    title: "Java Script",
    level: "Beginner",
    imgSrc: "https://www.bacancytechnology.com/qanda/wp-content/uploads/2023/12/HTML-Keep-Checkbox-Checked-After-Form-Submit.png",
    url : "https://www.youtube.com/watch?v=ER9SspLe4Hg&t=3s"
  },
  {
    title: "Data Structure",
    level: "Intermediate",
    imgSrc: "https://media.licdn.com/dms/image/v2/C5612AQEz0hpmCQQ9xA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1645599766887?e=2147483647&v=beta&t=zkzDgA7-o0uyq9xkEfagdHk7INMTQ5iFX8uKigLRjX0",
    url : "https://www.youtube.com/watch?v=xWLxhF3b5P8&t=17s"
  },
  {
    title: "HTML",
    level: "Advanced",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmUNmv5o3RyxrDChISZvqb5fG9nxsTQVTxPg&s",
    url : "https://www.youtube.com/watch?v=dD2EISBDjWM"
  },
  {
    title: "CSS",
    level: "Advanced",
    imgSrc: "https://miro.medium.com/v2/resize:fit:600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg",
    url : "https://www.youtube.com/watch?v=0W6qz0-aDaM"
  },
  {
    title: "React JS",
    level: "Intermediate",
    imgSrc: "https://blog.talent500.co/wp-content/uploads/2024/05/react-must-be-in-scope-when-using-jsx-scaled.jpg",
    url : "https://www.youtube.com/watch?v=MHn66JJH5zs&t=46s"
  },
  {
    title: "SQL",
    level: "Intermediate",
    imgSrc: "https://media.geeksforgeeks.org/wp-content/uploads/20240501161048/SQL-Databases.png",
    url : "https://www.youtube.com/watch?v=q_JsgpiuY98&t=17s"
  },
  {
    title: "MongoDB",
    level: "Intermediate",
    imgSrc: "https://www.digitalocean.com/api/static-content/v1/images?src=https%3A%2F%2Fcommunity-cdn-digitalocean-com.global.ssl.fastly.net%2Fv3ksSgN3Wr5YK6z8RrTxCiqf&width=1920",
    url : "https://www.youtube.com/watch?v=l7Psw5frLwk&t=20s"
  },
  {
    title: "Git & Github",
    level: "Intermediate",
    imgSrc: "https://www.javedali.net/post/intro-git-github/featured.jpg",
    url : "https://www.youtube.com/watch?v=RGOj5yH7evk&t=2s"
  },
  {
    title: "GoLang",
    level: "Intermediate",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN-nrx3JAILTj9HwgAsRwoImhniLl-05sBCw&s",
    url : "https://www.youtube.com/watch?v=un6ZyFkqFKo&t=16s"
  },
  {
    title: "Basic of Linux",
    level: "Beginner",
    imgSrc: "https://i.ytimg.com/vi/JNrid2qi0yk/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAnmVXtXilJwAEjTbYm-55xvKAXAA",
    url : "https://www.youtube.com/watch?v=sWbUDq4S6Y8&t=1481s"
  },
  {
    title: "Docker",
    level: "Intermediate",
    imgSrc: "https://www.askme.co.th/wp-content/uploads/2024/10/10.png",
    url : "https://www.youtube.com/watch?v=u-YWtdbpEhQ&t=18s"
  },
  {
    title: "Kubernetes",
    level: "Intermediate",
    imgSrc: "https://ik.imagekit.io/olibr/blogimages/Kubernetes-cover-image-.png",
    url : "https://www.youtube.com/watch?v=X48VuDVv0do&t=19s"
  },
  {
    title: "AWS Cloud",
    level: "Intermediate",
    imgSrc: "https://careertraining.ccny.cuny.edu/common/images/2/22994/Certified-AWS-Cloud-Practitioner-935x572.jpg",
    url : "https://www.youtube.com/watch?v=k1RI5locZE4&t=2s"
  },
  {
    title: "Advance Excel",
    level: "Advanced",
    imgSrc: "https://5.imimg.com/data5/KO/UM/GLADMIN-66275087/ms-excel-basic-computer-courses-500x500.png",
    url : "https://www.youtube.com/watch?v=09FlqkANCws&t=20s"
  }
];

const Course = () => {
  return (
    <div className="container ">
     <span className="flex items-center  justify-left space-x-4">  <Loader /> <AIAssistant />     </span> 
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-md-6 d-flex justify-content-center mb-4" key={index}>
            <div className="card">
              <div className="card__border"></div>
              <div className="card_title__container">
                <span className="card_title">{course.title}</span>
                <p className="card_paragraph">Level : {course.level}</p>
              </div>
              <hr className="line" />
              <ul className="card__list">
                <li className="card__list_item">
                  <img src={course.imgSrc} alt="Course" className="img" />
                </li>
              </ul>
              <button className="button"><a href={course.url} >View Course</a></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;