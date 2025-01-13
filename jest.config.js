export default {
  preset: 'ts-jest', // Usa ts-jest como preset para integração com TypeScript
  testEnvironment: 'jsdom', // Define o ambiente de teste como jsdom para simular o DOM
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transforma arquivos TypeScript e TSX com ts-jest
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Ignora arquivos de estilo
    '^.+\\.svg$': 'jest-transformer-svg', // Transforma arquivos SVG
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Configurações adicionais para o Jest
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.app.json', // Garante que o tsconfig correto seja usado
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Extensões reconhecidas
};
