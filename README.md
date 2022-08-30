# EXERCICE - Blog App whit React, Firebase and MUI
## App para mostrar post de blog
Ejercicio de practica que permite mostrar y agregar post
## _Descripción_
Desarrollado en React, Javascript, Firebase, MUI y Toastify, permite mostrar y listar segun categoria, tambien permite agregar post desde formulario de carga, acceso de login y register mediante formulario de acceso a usuarios.

Para leer los post utilice useFirestore de reactfire, para agregar los post collection y addDoc  de firebase/firestore.

Para las notificaciones use toast de react-toastify

Importante:
El boton de login y register estan desactivados permanente para evitar ataques al formulario, sin embargo toda la logica esta dispuesta, puede usar sus codigos de validacion de firebase propios ya que tambien los retire por motivos de seguridad.

1. Componentes:
- login
  - LoginActions
  - LoginButtons
  - LoginForm
- firebase
  - firebase
  - fireconfigKey
- NavBar
- footer
  - Footer
  - Copyright

2. Containers:
- PostDetailContainer
- PostListContainer


**Free Software, Oh Yeah! -  Desarrollado por: Armando Rivas**