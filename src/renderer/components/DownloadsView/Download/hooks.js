import { shell } from 'electron';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { downloadCleared } from '../../../../actions';


export const useActions = (id, filePath) => {
	const dispatch = useDispatch();

	const clearDownload = useCallback(() => {
		dispatch(downloadCleared(id));
	}, [id]);

	const showFile = useCallback(() => {
		shell.openItem(filePath);
	}, [filePath]);

	const showFileInFolder = useCallback(() => {
		shell.showItemInFolder(filePath);
	}, [filePath]);

	return {
		clearDownload,
		showFile,
		showFileInFolder,
	};
};
