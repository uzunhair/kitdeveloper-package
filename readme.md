## Установка

`npm install`

## Bem
`src/blocks` - папка bem

`src/blocks/pages` - страницы

`src/blocks/sections` - общие блоки страниц `header, footer, about` и тд.

`src/blocks/modules` - блоки выводимые в `sections`

`src/blocks/components` - компоненты на подобии `card, alert`

##### Структура страницы

- pages
  - head
  - sections
    - modules
      - components
    - components
    
##### Содержимое блоков
  - `.pug`
  - `.scss`
  - `.js`
  - `.json`
  

## Стили
- В `dev` режиме собриются 2 разных файла `theme.css` и `system.css`, это сделано чтобы не тратить 
лвиную долю времени на компиляцию редко изменяемых библиотек.
- В `production` режиме все стили объединяются в один файл `app.css`

### Работа с dev и prodaction
- Пока что делаем два рзных таска
- Добавлена ​​встроенная поддержка исходных карт - плагин gulp-sourcemaps больше не нужен!