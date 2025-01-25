import React from 'react';

const cardData = [
  {
    id: 1,
    title: 'Card 1',
    description: 'This is the description for Card 1.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Card 2',
    description: 'This is the description for Card 2.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Card 3',
    description: 'This is the description for Card 3.',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: 'Card 4',
    description: 'This is the description for Card 4.',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const App = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
