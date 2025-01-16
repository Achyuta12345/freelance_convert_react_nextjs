import React, { useState } from 'react';
import VerticalCardMultiImage from './VerticalCardMultiImage';

const CondeNastTechnology: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState<string>('technology');
    const [activeMenu, setActiveMenu] = useState<string>('About Technology');
    console.log(selectedPage);
  return (
   
 
    <div className="bg-white text-gray-800">
       

      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12">
      <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">CONDÉ NAST TECHNOLOGY</h1>
          <nav className="mt-4">
            <ul className="flex justify-center space-x-4">
              {[
                'About Technology',
                'Launch Pad',
                'Internal Support',
                'News & Content',
                'Community & Recognition',
                'Calendars',
              ].map((menu, index) => (
                <li key={index}>
                  <button
                    className={`text-gray-600 hover:text-black ${
                      activeMenu === menu ? 'border-b-2 border-blue-500' : ''
                    }`}
                
                    onClick={() => setActiveMenu(menu)}
                  >
                    {menu}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </header>
</div>
         <div className="col-span-3"><section className="mb-8">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="technology"
                  name="category"
                  value="technology"
                  checked={selectedPage === 'technology'}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="h-4 w-4"
                />
                <label className="text-gray-600 cursor-pointer" htmlFor="technology">Technology</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="focus-areas"
                  name="category"
                  value="focus-areas"
                  checked={selectedPage === 'focus-areas'}
                  onChange={(e) => setSelectedPage(e.target.value)}
                  className="h-4 w-4"
                />
                <label className="text-gray-600 cursor-pointer" htmlFor="focus-areas">Focus Areas &amp; OKRs</label>
              </div>
            </div>
          </section>
          </div>
        <main className="col-span-9">
        

         {selectedPage === 'technology' && (
            <>
             {/* <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <img
                  className="w-full h-auto"
                  src="https://placehold.co/400x300"
                  alt="Group of people representing the team"
                />
              </div>
              <div className="w-1/2 flex items-center">
                <p className="text-gray-600">
                  Create data-driven technology and products that are essential to connecting customers to our iconic
                  brands
                </p>
              </div>
            </div>
          </section> */}
           <VerticalCardMultiImage/>

          <section>
            <h2 className="text-2xl font-bold mb-4">Our Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Sanjay Bhakta', title: 'Chief Product & Technology Officer', img: 'https://placehold.co/200x200' },
                { name: 'Katharine Bailey', title: 'SVP Product & Design', img: 'https://placehold.co/200x200' },
                { name: 'Vikram Palicherla', title: 'SVP Engineering', img: 'https://placehold.co/200x200' },
                { name: 'Leader Name', title: 'Leader Title', img: 'https://placehold.co/200x200' },
                { name: 'Leader Name', title: 'Leader Title', img: 'https://placehold.co/200x200' },
                { name: 'Leader Name', title: 'Leader Title', img: 'https://placehold.co/200x200' },
              ].map((leader, index) => (
                <div key={index} className="text-center">
                  <img className="w-full h-auto mb-2" src={leader.img} alt={`Portrait of ${leader.name}`} />
                  <h3 className="text-lg font-bold">{leader.name}</h3>
                  <p className="text-gray-600">{leader.title}</p>
                </div>
              ))}
            </div>
          </section></>
          )}
          {selectedPage === 'focus-areas' && (
            <div>
            <h3>Focus Area</h3>
            </div>
          )}
        </main>
      </div>
      </div>
    </div>
  );
};

export default CondeNastTechnology;
