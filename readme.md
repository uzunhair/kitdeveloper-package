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
bem create my-block
bem create me-block -l folder/folder

## Задача 

1 Нажимаем на задачу - создается блок с указанным именем в папке по умалчанию

2 Нажимаем на задачу - 


  

## Стили
- В `dev` режиме собриются 2 разных файла `theme.css` и `system.css`, это сделано чтобы не тратить 
лвиную долю времени на компиляцию редко изменяемых библиотек.
- В `production` режиме все стили объединяются в один файл `app.css`