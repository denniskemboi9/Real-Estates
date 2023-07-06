import React, { useContext } from 'react';
import { AuthContext}  from '../Context/AuthContext';
import { PropertyContext } from '../Context/PropertyContext';

export default function ApprovePropert() {
  const { current_user } = useContext(AuthContext);
  const { properties, approveProperties } = useContext(PropertyContext);

  return (
    <div>
      {current_user && current_user.is_admin ? (
        <div>
          <h1>Approve Properties</h1>
          <div className="">
            {properties &&
              properties.map &&
              properties.map((property) =>
                !property.is_approved ? (
                  <div key={property.id} className="bg-gray-300">
                    <div className='border flex mb-5'>
                      <img className="h-[20vh] max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
                      <div className='p-3'>
                        <h4 className='font-bold text-2xl'>{property.name}</h4>
                        <p>Posted by {property.user.email}</p>
                        <button onClick={() => approveProperties(property.id)} className='bg-green-600 rounded-lg px-3 py-1 text-white'>Approve</button>
                      </div>
                    </div>
                  </div>
                ) : null
              )}
          </div>
        </div>
      ) : (
        <p className='text-red-900 text-center'>Only admins can use this page</p>
      )}
    </div>
  )
}