import React from 'react';

interface DividerProps {
  text?: string;
  style?: string;
}

const Divider:  React.FC<DividerProps> = ({ text, style }) => {
    return (
        <div className={`flex my-2 w-full flex-row items-center justify-between ${style}`}>
            <h2 className='mr-4'>{text}</h2>
            <hr className="my-4 border-t w-full border-yellow-600" />
        </div>
    );
};

export default Divider;