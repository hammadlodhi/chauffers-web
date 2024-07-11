import React, { FC } from 'react';

interface IProps {
  text: string | undefined;
}

const ErrorMessage: FC<IProps> = ({ text }) => {
  return <p className='error-message'>{text}</p>;
};

export default ErrorMessage;
