// themeConfig.ts

export enum ThemeNames {
    classic = 'classic',
    modern = 'modern',
    elegant = 'elegant',
    vibrant = 'vibrant',
    midnight = 'midnight',
    forest = 'forest',
    sunset = 'sunset',
    ocean = 'ocean',
    desert = 'desert',
    ironMan = 'ironMan',
    thor = 'thor',
    hulk = 'hulk',
    captainAmerica = 'captainAmerica',
    blackWidow = 'blackWidow',
    spiderMan = 'spiderMan',
    blackPanther = 'blackPanther',
    doctorStrange = 'doctorStrange',
    flash = 'flash',
    aquaman = 'aquaman',
  }
  
  // Define theme configuration types
  export type Theme = {
    label: string;
    primary: string;
    background: string;
    text: string;
    accent: string;
  };
  
  export const themes: Record<ThemeNames, Theme> = {
    classic: {
      label: 'Classic Blue',
      primary: '#1f2937',
      background: '#ffffff',
      text: '#111827',
      accent: '#4f46e5',
    },
    modern: {
      label: 'Modern Gray',
      primary: '#4b5563',
      background: '#f9fafb',
      text: '#1f2937',
      accent: '#9ca3af',
    },
    elegant: {
      label: 'Elegant Purple',
      primary: '#6b21a8',
      background: '#f3e8ff',
      text: '#2e1065',
      accent: '#9b4d96',
    },
    vibrant: {
      label: 'Vibrant Orange',
      primary: '#ea580c',
      background: '#fff7ed',
      text: '#7c2d12',
      accent: '#f97316',
    },
    midnight: {
      label: 'Midnight Navy',
      primary: '#1e3a8a',
      background: '#f1f5f9',
      text: '#ffffff',
      accent: '#4b5563',
    },
    forest: {
      label: 'Forest Green',
      primary: '#064e3b',
      background: '#d1fae5',
      text: '#064e3b',
      accent: '#10b981',
    },
    sunset: {
      label: 'Sunset Red',
      primary: '#9b1d20',
      background: '#fef2f2',
      text: '#3e2a47',
      accent: '#e11d48',
    },
    ocean: {
      label: 'Ocean Blue',
      primary: '#0d3b66',
      background: '#f1f5f8',
      text: '#1a202c',
      accent: '#00b4d8',
    },
    desert: {
      label: 'Desert Sand',
      primary: '#9a7d4f',
      background: '#faf3e0',
      text: '#3e2a47',
      accent: '#c47c48',
    },
    ironMan: {
      label: 'Iron Man',
      primary: '#b91d2a',
      background: '#f1f5f9',
      text: '#1f2937',
      accent: '#ffcc00',
    },
    thor: {
      label: 'Thor',
      primary: '#0d3b66',
      background: '#e0f7fa',
      text: '#ffffff',
      accent: '#ff9100',
    },
    hulk: {
      label: 'Hulk',
      primary: '#4caf50',
      background: '#d1f7e1',
      text: '#2e7d32',
      accent: '#388e3c',
    },
    captainAmerica: {
      label: 'Captain America',
      primary: '#003366',
      background: '#ffffff',
      text: '#ff0000',
      accent: '#3c8d99',
    },
    blackWidow: {
      label: 'Black Widow',
      primary: '#b71c1c',
      background: '#fafafa',
      text: '#212121',
      accent: '#fbc02d',
    },
    spiderMan: {
      label: 'Spider-Man',
      primary: '#f44336',
      background: '#f1f5f9',
      text: '#0d47a1',
      accent: '#ffeb3b',
    },
    blackPanther: {
      label: 'Black Panther',
      primary: '#4a148c',
      background: '#e8eaf6',
      text: '#212121',
      accent: '#d32f2f',
    },
    doctorStrange: {
      label: 'Doctor Strange',
      primary: '#9c27b0',
      background: '#fff3e0',
      text: '#1a237e',
      accent: '#ff4081',
    },
    flash: {
      label: 'The Flash',
      primary: '#ff5722',
      background: '#f9fbe7',
      text: '#212121',
      accent: '#ffc107',
    },
    aquaman: {
      label: 'Aquaman',
      primary: '#00bcd4',
      background: '#e1f5fe',
      text: '#004d40',
      accent: '#ff5722',
    },
  };
  
  // Function to get theme by name
  export function getTheme(themeName: ThemeNames): Theme {
    return themes[themeName] || themes.classic; // Default to classic
  }
  