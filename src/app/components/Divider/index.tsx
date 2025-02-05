import React from 'react';

interface DividerProps {
  text?: string;
}

const Divider:  React.FC<DividerProps> = ({ text }) => {
    return (
        <div className='flex my-2 w-full flex-row items-center justify-between'>
            <h2 className='mr-4'>{text}</h2>
            <hr className="my-4 border-t w-full border-yellow-600" />
        </div>
    );
};

export default Divider;