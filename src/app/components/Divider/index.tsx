import React from 'react';

interface DividerProps {
  text?: string;
  style?: string;
  borderColor?: string;
}

const Divider:  React.FC<DividerProps> = ({ text, style, borderColor }) => {
    return (
        <div className={`flex my-2 w-full flex-row items-center justify-between ${style}`}>
            {text ? (
            <h2 className='mr-4'>{text}</h2>
            ) : null}
            <hr className={`my-4 border-t w-full border-${borderColor}`} />
        </div>
    );
};

export default Divider;