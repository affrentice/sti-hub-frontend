export type PrimaryColorConfig = {
  name?: string
  light?: string
  main: string
  dark?: string
}

// Primary color config object
const primaryColorConfig: PrimaryColorConfig[] = [
  {
    name: 'primary-1',
    light: '#4F78D3', // Lighter Navy Blue
    main: '#1E3A8A', // Navy Blue
    dark: '#162A63' // Darker Navy Blue
  },
  {
    name: 'primary-2',
    light: '#8D99A6', // Lighter Medium Gray
    main: '#6B7280', // Medium Gray
    dark: '#4B5258' // Darker Medium Gray
  },
  {
    name: 'primary-3',
    light: '#FFD58A', // Lighter Golden Yellow
    main: '#F59E0B', // Golden Yellow
    dark: '#B27708' // Darker Golden Yellow
  },
  {
    name: 'primary-4',
    light: '#5FC07B', // Lighter Forest Green
    main: '#2D6A4F', // Forest Green
    dark: '#1E4B38' // Darker Forest Green
  },
  {
    name: 'primary-5',
    light: '#7FCCE9', // Lighter Sky Blue
    main: '#0EA5E9', // Sky Blue
    dark: '#086B99' // Darker Sky Blue
  }
]

export default primaryColorConfig
