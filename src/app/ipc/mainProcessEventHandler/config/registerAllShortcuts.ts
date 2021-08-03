import { IpcMainEvent } from 'electron';
import { WindowManager } from '../../../windows/windowManager';
import { IPCMainEnum } from '../../ipcEventEnum';

/**
 */
export const registerAllShortcuts = (e: IpcMainEvent) => {
  WindowManager.getInstance()
    .getSearchWindow()
    .webContents.send(IPCMainEnum.registerAllShortcuts);
};
