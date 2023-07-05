import React from 'react';

const Avatar = ({ src }) => {
  return (
    <div className='flex items-center justify-center w-3 h-3 rounded-full bg-gray-300'>
      {src ? (
        <img src={src} alt='Avatar' className='w-full h-full object-cover rounded-full' />
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 150 150'
          stroke='currentColor'
          className='w-8 h-8 text-gray-500'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M20 12a8 8 0 11-16 0 8 8 0 0116 0z'
          />
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M12 6h.01M12 6a2 2 0 00-2 2v6a2 2 0 002 2h0a2 2 0 002-2V8a2 2 0 00-2-2z'
          />
        </svg>
      )}
    </div>
  );
};

export default Avatar;
