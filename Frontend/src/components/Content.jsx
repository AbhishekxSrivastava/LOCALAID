import React from 'react';
import ContentHeader from './ContentHeader';
import '../styles/content.css';
import RequestCard from './RequestCard'; // Use default import (no curly braces)
import RequestList from './RequestList';


const Content = () => {
  return (
    <div className='content'>
      <ContentHeader />
      <RequestCard />
      <RequestList />
    </div>
  );
};

export default Content;
