/* eslint-disable */
'use strict';

const { readdirSync } = require('fs');
const create = require('bem-tools-create');
const readlineSync = require('readline-sync');

const getDirectories = source =>
	readdirSync(source, { withFileTypes: true })
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name);

const bemFolder = 'src/blocks/';
// Список папок в bemFolder
const bemFolderList = getDirectories(bemFolder);
// Выводим список папок для выбора
const	index = readlineSync.keyInSelect(bemFolderList, `Specify the folder number:`);

// Название блока
const blockName = readlineSync.question('Enter block name ');

if(blockName) {

	// полный путь к создаваемой папке блока
	const blockPath = `${bemFolder}${bemFolderList[index]}/${blockName}`;
	console.log(`Создание блока ${blockPath}`);
	create(blockPath);

} else {
	console.log('Отмена операции: не указан блок');
}