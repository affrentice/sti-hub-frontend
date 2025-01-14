/*
 * We recommend using the merged theme if you want to override our core theme.
 * This means you can use our core theme and override it with your own customizations.
 * Write your overrides in the userTheme object in this file.
 * The userTheme object is merged with the coreTheme object within this file.
 * Export this file and import it in the `@components/theme/index.tsx` file to use the merged theme.
 */

// MUI Imports
import { deepmerge } from '@mui/utils'
import type { Theme } from '@mui/material/styles'

// Type Imports
import type { Settings } from '@core/contexts/settingsContext'
import type { SystemMode } from '@core/types'

// Core Theme Imports
import coreTheme from '@core/theme'

const mergedTheme = (settings: Settings, mode: SystemMode, direction: Theme['direction']) => {
  const { skin } = settings

  // Vars
  const userTheme = {
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#1E3A8A', // Navy Blue
            light: '#4F78D3', // Lighter Navy Blue
            dark: '#162A63', // Darker Navy Blue
            lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
          },
          secondary: {
            main: '#6B7280', // Medium Gray
            light: '#8D99A6', // Lighter Gray
            dark: '#4B5258', // Darker Gray
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
          },
          error: {
            main: '#D00000', // Crimson Red
            light: '#FF7074',
            dark: '#AC0000',
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
          },
          warning: {
            main: '#F59E0B', // Golden Yellow
            light: '#FFD58A',
            dark: '#B27708',
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
          },
          info: {
            main: '#0EA5E9', // Sky Blue
            light: '#7FCCE9',
            dark: '#086B99',
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
          },
          success: {
            main: '#2D6A4F', // Forest Green
            light: '#5FC07B',
            dark: '#1E4B38',
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
          },
          text: {
            primary: `rgb(var(--mui-mainColorChannels-light) / 0.9)`,
            secondary: `rgb(var(--mui-mainColorChannels-light) / 0.7)`,
            disabled: `rgb(var(--mui-mainColorChannels-light) / 0.4)`,
            primaryChannel: 'var(--mui-mainColorChannels-light)',
            secondaryChannel: 'var(--mui-mainColorChannels-light)'
          },
          divider: `rgb(var(--mui-mainColorChannels-light) / 0.12)`,
          dividerChannel: 'var(--mui-mainColorChannels-light)',
          background: {
            default: skin === 'bordered' ? '#FFFFFF' : '#F4F5FA',
            paper: '#FFFFFF'
          },
          action: {
            active: `rgb(var(--mui-mainColorChannels-light) / 0.6)`,
            hover: `rgb(var(--mui-mainColorChannels-light) / 0.04)`,
            selected: `rgb(var(--mui-mainColorChannels-light) / 0.08)`,
            disabled: `rgb(var(--mui-mainColorChannels-light) / 0.3)`,
            disabledBackground: `rgb(var(--mui-mainColorChannels-light) / 0.12)`,
            focus: `rgb(var(--mui-mainColorChannels-light) / 0.1)`,
            focusOpacity: 0.1,
            activeChannel: 'var(--mui-mainColorChannels-light)',
            selectedChannel: 'var(--mui-mainColorChannels-light)'
          },
          customColors: {
            bodyBg: '#F4F5FA',
            chatBg: '#F7F6FA',
            greyLightBg: '#FAFAFA',
            inputBorder: `rgb(var(--mui-mainColorChannels-light) / 0.22)`,
            tableHeaderBg: '#F6F7FB',
            tooltipText: '#FFFFFF',
            trackBg: '#F0F2F8'
          }
        }
      },
      dark: {
        palette: {
          primary: {
            main: '#1E3A8A',
            light: '#4F78D3',
            dark: '#162A63',
            lighterOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-primary-mainChannel) / 0.38)'
          },
          secondary: {
            main: '#6B7280',
            light: '#8D99A6',
            dark: '#4B5258',
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-secondary-mainChannel) / 0.38)'
          },
          error: {
            main: '#D00000',
            light: '#FF7074',
            dark: '#AC0000',
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-error-mainChannel) / 0.38)'
          },
          warning: {
            main: '#F59E0B',
            light: '#FFD58A',
            dark: '#B27708',
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-warning-mainChannel) / 0.38)'
          },
          info: {
            main: '#0EA5E9',
            light: '#7FCCE9',
            dark: '#086B99',
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-info-mainChannel) / 0.38)'
          },
          success: {
            main: '#2D6A4F',
            light: '#5FC07B',
            dark: '#1E4B38',
            contrastText: '#fff',
            lighterOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.08)',
            lightOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.16)',
            mainOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.24)',
            darkOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.32)',
            darkerOpacity: 'rgb(var(--mui-palette-success-mainChannel) / 0.38)'
          },
          text: {
            primary: `rgb(var(--mui-mainColorChannels-dark) / 0.9)`,
            secondary: `rgb(var(--mui-mainColorChannels-dark) / 0.7)`,
            disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.4)`,
            primaryChannel: 'var(--mui-mainColorChannels-dark)',
            secondaryChannel: 'var(--mui-mainColorChannels-dark)'
          },
          divider: `rgb(var(--mui-mainColorChannels-dark) / 0.12)`,
          dividerChannel: 'var(--mui-mainColorChannels-dark)',
          background: {
            default: skin === 'bordered' ? '#312D4B' : '#28243D',
            paper: '#312D4B'
          },
          action: {
            active: `rgb(var(--mui-mainColorChannels-dark) / 0.6)`,
            hover: `rgb(var(--mui-mainColorChannels-dark) / 0.04)`,
            selected: `rgb(var(--mui-mainColorChannels-dark) / 0.08)`,
            disabled: `rgb(var(--mui-mainColorChannels-dark) / 0.3)`,
            disabledBackground: `rgb(var(--mui-mainColorChannels-dark) / 0.12)`,
            focus: `rgb(var(--mui-mainColorChannels-dark) / 0.1)`,
            focusOpacity: 0.1,
            activeChannel: 'var(--mui-mainColorChannels-dark)',
            selectedChannel: 'var(--mui-mainColorChannels-dark)'
          },
          customColors: {
            bodyBg: '#28243D',
            chatBg: '#373452',
            greyLightBg: '#373350',
            inputBorder: `rgb(var(--mui-mainColorChannels-dark) / 0.22)`,
            tableHeaderBg: '#3D3759',
            tooltipText: '#312D4B',
            trackBg: '#474360'
          }
        }
      }
    }
  } as Theme

  return deepmerge(coreTheme(settings, mode, direction), userTheme)
}

export default mergedTheme
