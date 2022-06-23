import { ref, reactive, watch, Ref } from 'vue'
import { setTheme, setTextSize } from './utils'

export const themes = reactive([
  'bmi-default', 
  'bmi-secondary',
  'adult-swim',
  'bert-dark',
  'loflo-records',
  'cher-ami'
])


export const appTheme: Ref<ApplicationTheme> = ref('bmi-default')

export const appTextSize: Ref<Breakpoints> = ref('md')

watch(appTheme, (theme: ApplicationTheme, prevTheme: ApplicationTheme) => {
  console.log(`THEME CHANGED: ${prevTheme} -> ${theme}`)
  setTheme(theme)
})

watch(appTextSize, (size: Breakpoints, prevSize: Breakpoints) => {
  console.log(`TEXT SIZE CHANGED: ${prevSize} -> ${size}`, size)
  setTextSize(size)
})