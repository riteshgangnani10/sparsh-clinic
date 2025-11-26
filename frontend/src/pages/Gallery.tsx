import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { galleryAPI } from '../api';

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const { data, isLoading } = useQuery({
    queryKey: ['gallery', filter],
    queryFn: async () => {
      const params = filter !== 'all' ? { category: filter } : {};
      const response = await galleryAPI.getAll(params);
      return response.data.data;
    },
  });

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'facility', label: 'Facility' },
    { value: 'therapy-session', label: 'Therapy Sessions' },
    { value: 'event', label: 'Events' },
    { value: 'equipment', label: 'Equipment' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-600 to-secondary-600 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl opacity-90">Explore our facility and see our work in action</p>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === f.value
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {isLoading ? (
            <div className="text-center py-12">Loading gallery...</div>
          ) : data && data.length > 0 ? (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.map((item: any, index: number) => (
                <motion.div
                  key={item._id}
                  className="aspect-square bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow cursor-pointer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.type === 'image' ? (
                    <img
                      src={item.media.url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center text-white text-4xl">
                      🎥
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-600">
              No items found in this category
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

