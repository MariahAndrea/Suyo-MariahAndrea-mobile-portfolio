import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export const Data = {
  skills: ['UI/UX', 'Digital Art', 'Graphic Design', 'C++', 'JavaScript', 'Python', 'HTML', 'Node.js', 'MongoDB' ],
  projects: [
    { id: '1', img: require('../../assets/lumen.png'), projTitle: 'Lumen', description: 'A 2D platformer game' },
    { id: '2', img: require('../../assets/starmu.png'), projTitle: 'Starmu', description: 'A web-based virtual pet simulation game' },
    { id: '3', img: require('../../assets/sojourn.png'), projTitle: 'Sojourn', description: 'A travel app that helps tourists and commuters navigate places' }
  ],
  contact: [
    { id: '1', information: 'mariah_andrea_suyo@dlsl.edu.ph', IconLibrary: MaterialIcons, iconName: 'email' as const },
    { id: '2', information: 'Mariah Andrea Suyo', IconLibrary: MaterialIcons, iconName: 'facebook' as const }
  ]
}