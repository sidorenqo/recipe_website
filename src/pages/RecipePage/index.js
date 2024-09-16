import React from 'react';
import { Link } from 'react-router-dom';

const RecipePage = props => {
  return (
    <div>
      <Link to={'/'}>
        <button>Назад</button>
      </Link>
    </div>
  );
};

export default RecipePage;
