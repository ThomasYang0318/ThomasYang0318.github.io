// Each skill points to the project that best demonstrates it.
// Change projectId to redirect a skill tag to a different project card.
export const skillGroups = [
  {
    name: 'Languages',
    skills: [
      { name: 'Python', projectIds: ['local-ai-chatbot', 'stock-assistant', 'sign-language-recognition'] },
      { name: 'C / C++', projectId: 'opengl' },
      { name: 'Dart', projectIds: ['nebula', 'mijing', 'wearable'] },
      { name: 'MATLAB', projectId: 'wearable' }
    ]
  },
  {
    name: 'Embedded & Hardware',
    skills: [
      { name: 'IMU', projectId: 'wearable' },
      { name: 'Luckfox Pico Zero', projectId: 'wearable' },
      { name: 'Digital Logic', projectId: 'two-dices' }
    ]
  },
  {
    name: 'AI & Signal',
    skills: [
      { name: 'CNN', projectIds: ['wearable', 'sign-language-recognition'] },
      { name: 'Image Classification', projectId: 'sign-language-recognition' },
      { name: 'IMU Signal Processing', projectId: 'wearable' }
    ]
  },
  {
    name: 'Applications & Tools',
    skills: [
      { name: 'Flutter', projectIds: ['nebula', 'mijing', 'wearable'] },
      { name: 'LINE Bot', projectId: 'stock-assistant' },
      { name: 'Git', projectIds: ['local-ai-chatbot', 'nebula', 'opengl'] },
      { name: 'Linux', projectIds: ['local-ai-chatbot', 'wearable'] }
    ]
  },
  {
    name: 'Visual Computing',
    skills: [
      { name: 'OpenGL', projectId: 'opengl' },
      { name: 'Image Processing', projectIds: ['mini-photoshop', 'sign-language-recognition'] },
      { name: 'Blender', projectIds: ['blender-vfx-movie', 'blender-match-move'] }
    ]
  }
];
