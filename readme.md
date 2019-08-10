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
  
#### Создание блоков
- `bem create my-block`
- `bem create me-block -l folder/folder`

или 

`npm run create:bem`

## Стили
- В `dev` режиме собриются 2 разных файла `theme.css` и `system.css`, это сделано чтобы не тратить 
лвиную долю времени на компиляцию редко изменяемых библиотек.
- В `production` режиме все стили объединяются в один файл `app.css`

## Скрипты

Все сторонние большие библиотеки скриптов копируются из `node_modules` в минимизированном виде

Свои скрипты и скрипты маленького размера подключаются 
- в файле `js/entry.js`
- или из папки `js/concat` и компилируется  `webpack`

## Задача 

1 Попробовать реализовать авто импорт новый блоков