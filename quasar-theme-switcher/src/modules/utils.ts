import { Ref, isRef } from 'vue'

export function setTheme(theme: ApplicationTheme | Ref<ApplicationTheme>){
  document && document.body.setAttribute('data-application-theme', isRef(theme) ? theme.value: theme)
  const elm = document.getElementById('app')
  elm && elm.classList.add('bg-body')
}

export function setTextSize(size: Breakpoints | Ref<Breakpoints>){
  document && document.body.setAttribute('data-text-size', isRef(size) ? size.value: size)
}