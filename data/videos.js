// Vamos a crear 9 videos para cada categoría, pero como son muchas, solo pondré ejemplos para una categoría.
// El usuario deberá completar el resto.

export const videos = [
  // Política y Gobierno - 9 videos
  {
    id: 1,
    title: 'Cumbre Global de Líderes 2024',
    category: 'politics',
    duration: '15:30',
    views: '125K',
    likes: '12K',
    date: '2024-01-15',
    source: 'CNN International',
    thumbnail: '/images/politics1.jpg',
    isLive: false
  },
  {
    id: 2,
    title: 'Análisis de Elecciones Europeas',
    category: 'politics',
    duration: '22:15',
    views: '89K',
    likes: '8.5K',
    date: '2024-01-14',
    source: 'BBC World',
    thumbnail: '/images/politics2.jpg',
    isLive: false
  },
  // ... 7 videos más para política

  // Economía y Finanzas - 9 videos
  {
    id: 10,
    title: 'Mercados Globales 2024',
    category: 'economy',
    duration: '18:45',
    views: '95K',
    likes: '9.2K',
    date: '2024-01-15',
    source: 'Bloomberg',
    thumbnail: '/images/economy1.jpg',
    isLive: false
  },
  // ... 8 videos más para economía

  // FUTBOL - 9 videos
  {
    id: 19,
    title: 'Champions League Highlights',
    category: 'sports',
    duration: '25:20',
    views: '350K',
    likes: '45K',
    date: '2024-01-14',
    source: 'ESPN',
    thumbnail: '/images/sports1.jpg',
    isLive: false
  },
  // ... 8 videos más para futbol

  // Tecnología - 9 videos
  {
    id: 28,
    title: 'Avances en Inteligencia Artificial',
    category: 'technology',
    duration: '20:10',
    views: '200K',
    likes: '20K',
    date: '2024-01-13',
    source: 'TechCrunch',
    thumbnail: '/images/tech1.jpg',
    isLive: false
  },
  // ... 8 videos más para tecnología

  // Salud y Ciencia - 9 videos
  {
    id: 37,
    title: 'Descubrimiento en Medicina',
    category: 'health',
    duration: '16:40',
    views: '150K',
    likes: '15K',
    date: '2024-01-12',
    source: 'National Geographic',
    thumbnail: '/images/health1.jpg',
    isLive: false
  },
  // ... 8 videos más para salud

  // Cultura y Entretenimiento - 9 videos
  {
    id: 46,
    title: 'Festival de Cine de Cannes',
    category: 'culture',
    duration: '19:30',
    views: '180K',
    likes: '18K',
    date: '2024-01-11',
    source: 'Variety',
    thumbnail: '/images/culture1.jpg',
    isLive: false
  },
  // ... 8 videos más para cultura

  // Internacional - 9 videos
  {
    id: 55,
    title: 'Conflictos Internacionales',
    category: 'international',
    duration: '21:00',
    views: '110K',
    likes: '11K',
    date: '2024-01-10',
    source: 'Al Jazeera',
    thumbnail: '/images/international1.jpg',
    isLive: false
  },
  // ... 8 videos más para internacional
];
