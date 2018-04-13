Все данные собираются в `data.json` файл.

При компиляции, содержимое файлов обворачивается в массив с идентичным названием.

Например массив из файла `color.js`

`{
  "blue": "blue",
  "indigo": "indigo",
  "purple": "purple",
  }
`

компилируется в 

`{  
  "colors": {
    "blue": "blue",
    "indigo": "indigo",
    "purple": "purple",
  }
}
`