
global.fetch = jest.fn(() => Promise.resolve({
  json: () => Promise.resolve({
    ant001: {
      image_uri: 'https://acnhapi.com/v1/icons/villagers/1',
      name: {
        'name-USen': 'Benjamin',
      },
      personality: 'Lazy',
    },
    ant002: {
      image_uri: 'https://acnhapi.com/v1/icons/villagers/2',
      name: {
        'name-USen': 'Joseph',
      },
      personality: 'Angry',
    },
  }),
}));

const originalError = global.console.error;
global.console.error = jest.fn((...args) => {
  if (typeof args[0] === 'string' && args[0].includes('Warning: An update to')) {
    return null;
  }
  return originalError.call(console, args);
});
