export const init = () => {
   const appElement=  document.querySelector('body')
   
   appElement.innerHTML = '<div id="app"> </div>'

   return document.getElementById('app')
}
