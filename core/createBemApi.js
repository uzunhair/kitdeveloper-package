/* eslint-disable */
'use strict';

const { readdirSync } = require('fs');
const create = require('bem-tools-create');
const createBemApi = require('readline-sync');

const getDirectories = source =>
	readdirSync(source, { withFileTypes: true })
		.filter(dirent => dirent.isDirectory())
		.map(dirent => dirent.name);

const bemFolder = 'src/blocks/';
// Список папок в bemFolder
const bemFolderList = getDirectories(bemFolder);
// Выводим список папок для выбора
const	index = createBemApi.keyInSelect(bemFolderList, `Specify the folder number:`);

if(bemFolderList[index]) {
// Название блока
	const blockName = createBemApi.question('Enter block name ');

	if (blockName) {
		// полный путь к создаваемой папке блока
		const blockPath = `${bemFolder}${bemFolderList[index]}/${blockName}`;
		console.log(`Создание блока ${blockPath}`);
		create(blockPath);

	} else {
		console.log('Отмена операции: не указан блок');
	}
} else {
	console.log('Отмена операции, выберите любую папку кроме 0: CANCEL');
}