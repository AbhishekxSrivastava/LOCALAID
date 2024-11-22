import React from 'react';
import '../styles/requestList.css';
import Image1 from '../assets/Roshni.png';
import Image2 from '../assets/Rohan.png';
import Image3 from '../assets/Sarthak.png';
import Image4 from '../assets/Ritika.png';

const userRequest = [
  {
    image: Image1,
    name: 'Roshni',
    cause: 'Need help for Gardening',
    distance: '250m',
  },
  {
    image: Image2,
    name: 'Rohan',
    cause: 'Need a Plumber',
    distance: '500m',
  },
  {
    image: Image4,
    name: 'Ritika',
    cause: 'Need an Electrician',
    distance: '790m',
  },
  {
    image: Image3,
    name: 'Sarthak',
    cause: 'Need a Car Mechanic',
    distance: '900m',
  },
];

const RequestList = () => {
  return (
    <div className="request--list">
      <div className="list--header">
        <h2>Live Current Requests</h2>
      </div>
      <div className="list--container">
        {userRequest.map((user, index) => (
          <div className="list" key={index}>
            <div className="user--detail">
              <img src={user.image} alt={user.name} />
              <h2>{user.name}</h2>
              <span>{user.cause}</span>
            </div>
            <span className="distance">{user.distance}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestList;



// import React from 'react'
// import '../styles/teacherList.css';
// import Image1  from '../assets/Roshni.png';
// import Image2  from '../assets/Rohan.png';
// import Image3  from '../assets/Sarthak.png';
// import Image4  from '../assets/Ritika.png';

// const teachers =[
//   {
//     image: Image1,
//     name: 'Roshni',
//     duration: 'Need help for Gardening',
//     cost:'250m'
//   },
//   {
//     image: Image2,
//     name: 'Rohan',
//     duration: 'Need a Plumber',
//     cost:'500m'
//   },
//   {
//     image: Image4,
//     name: 'Ritika',
//     duration: 'Need an Electrician',
//     cost:'790m'
//   },
//   {
//     image: Image3,
//     name: 'Sarthak',
//     duration: 'Need a Car Mechanic',
//     cost:'900m'
//   },
// ]
// const TeacherList = () => {
//   return (
//     <div className = "teacher--list">
//       <div className = "list--header">
//         <h2>Live current Requests</h2>
//         {/* <select>
//           <option value = "english">English</option>
//           <option value = "hindi">Hindi</option>
//         </select> */}
//       </div>
//       <div className="list--container">
//         {teachers.map(teacher => <div className='list'>
//           <div className="teacher--detail">
//           <img src={teacher.image} alt ={teacher.name} />
//           <h2>{teacher.name}</h2>
//           </div>
//           <span>{teacher.duration}</span>
//           <span className="distance">{teacher.cost}</span>
//           <span className="teacher--todo">:</span>
//         </div>)}
//       </div>
//     </div>
//   )
// }

// export default TeacherList