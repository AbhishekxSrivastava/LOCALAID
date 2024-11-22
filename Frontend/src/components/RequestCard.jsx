import React from 'react';
import { BiRegistered } from 'react-icons/bi';

const Requests = [
    {
        title:'Post a new Request',
        icon: <BiRegistered />
    },
];

const RequestCard = () => {
  return (
    <div className='RequestCard--container'>
        {Requests.map((item) => (
            <div className='card'>
                <div className="card--cover">{item.icon}</div>
                <div className="card-title">
                    <h2>{item.title}</h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default RequestCard;

