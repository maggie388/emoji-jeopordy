import React from 'react';
import './Category.scss'

import CategoryHeading from '../CategoryHeading/CategoryHeading';
import QuestionCard from '../QuestionCard/QuestionCard';

const Category = ({ heading, questions }) => {
    let value = 0;
    return (
        <div className="category">
            <CategoryHeading heading={heading} />
            {
                questions.map((q) => {
                    value += 200;
                    return <QuestionCard key={q.id} question={q.emoji} value={value} />
                })
            }
        </div>
    );
};

export default Category;