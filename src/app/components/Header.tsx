import React, { useState } from 'react';
import { HeaderProps } from '../../../pages';


const Header: React.FC<HeaderProps> = ({ initialUrl = '', imageUrl, descriptionUrl }) => {
  const [url, setUrl] = useState<string>(initialUrl); // State to manage the input URL

  const handleRedirect = () => {
    if (url.trim()) {
      // Add protocol if missing (to handle cases like "example.com")
      const validUrl = url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
      window.location.href = validUrl;
    } else {
      alert('Please enter a valid URL.');
    }
  };

  return (
    <div className="flex items-center justify-between border-t border-b py-4 px-6 border-t-2 border-b-2 mb-20">
      <div className="flex items-center">
        <img
          alt="Black and white portrait of a person with a hood"
          className="w-24 h-24 object-cover"
          height="100"
          src={
            imageUrl || // Use the provided image URL, or fallback to a default
            'https://storage.googleapis.com/a1aa/image/81CneFLIj42XTiMv50D3fi6M9hA8NRI7MHASK1RfKz3KLeRPB.jpg'
          }
          width="100"
        />
        <p className="ml-4 text-gray-700">
         {descriptionUrl}
        </p>
        
      </div>

      <input
        onChange={(e) => setUrl(e.target.value)}
        value={url}
        className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Enter Url"
      />
      <button onClick={handleRedirect} className="bg-black text-white py-2 px-4">
        Call To Action
      </button>
    </div>
  );
};

export default Header;
