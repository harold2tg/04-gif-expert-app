// module.exports = {
//     testEnvironment: 'jest-environment-jsdom',
//     setupFiles: ['./jest.setup.js']
// }


module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: 'current'
          }
        }
      ]
    ]
  };