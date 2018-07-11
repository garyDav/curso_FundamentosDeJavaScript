// Para subir un proyecto a npm
// 1. Crear un proyecto en github
// 2. Configurar cuenta de NPM (abrir terminal)
$ npm set init.author.name "Gary Guzman"
$ npm set init.author.email "gary.2810.dav@gmail.com"
$ npm set init.author.url "https://twitter.com/gm_garyDav"
$ npm login
  // Username: ggary
  // Password: Level 1
// 3. Crear y/o entrar al proyecto
  // mkdir platzom && cd platzom
// 4. iniciar NPM
$ npm init
  // name: enter
  // version: 0.1.0
  // description: Traductor de idioma platzom
  // entry point: (index.js)
  // test command: enter
  // git repository: https://github.com/usuario/proyecto
  // keywords: platzom platzi fundamentos javascript js
  // license: (ISC) MIT
  // enter
// 5. se genera el package.json (editamos)
// 6. creamos un archivo LICENSE
// 7. creamos README.md
# Platzom

Platzom es un idioma inventando pra el [Curso de Fundamentos
de JavaScript](https://platzi.com/js) de [Platzi](https://platzi.com),
el mejor lugar de educación online

## Descripción del idioma

- Si la palabra termina con 'ar' se le quitan estas dos letras
- Si la palabra inicia con Z, se le añade 'pe' al final
- Si la palabra traducida tiene 10 o mas letras, se debe partir en dos por la mitad y unir con un guión medio
- Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalado letras mayúsculas y minúsculas
- Este es solo un ejemplo `código...`

## Instalación

```
npm install platzom
```

## Uso

```
import platzom from 'platzom'

platzom('Programar') // Program
platzom('Zorro') // Zorrope
platzom('Zarpar') // Zarppe
platzom('Abecedario') // Abece-dario
platzom('sometemos') // SoMeTeMoS
```

## Créditos
- [Sacha Lifszyc](https://twitter.com/@slifszyc)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
