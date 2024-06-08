import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

const indigo = {
  50: '#fcf5e8',
  100: '#fcf5e8',
  200: '#f7e2bb',
  300: '#f1cf8d',
  400: '#ebbc60',
  500: '#C38918',
  600: '#9f7014',
  700: '#72500e',
  800: '#443008',
  900: '#171003',
  950: '#171003'
}

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans'],
        barrio: ['Barrio']
      },
      colors: {
        background: {
          DEFAULT: '#e2e0c9'
        },
        indigo
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      },
      typography: {
        DEFAULT: {
          css: {
            color: indigo[800]
          }
        }
      },
      animation: {
        shake: 'shake 1s cubic-bezier(.36,.07,.19,.97) both'
      },
      keyframes: {
        shake: {
          '10%, 90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(4px, 0, 0)' }
        }
      }
    }
  },
  plugins: [tailwindForms, tailwindTypography]
}
