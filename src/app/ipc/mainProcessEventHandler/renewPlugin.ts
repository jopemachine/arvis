import { IpcMainEvent } from 'electron';
import { getDestWindow } from '../getDestWindow';
import { IPCMainEnum } from '../ipcEventEnum';

/**
 * @param  {string} destWindow?
 * @param  {string} bundleId?
 */
export const renewPlugin = (
  e: IpcMainEvent,
  arg: { destWindow?: string; bundleId?: string } | undefined
) => {
  if (arg && arg.destWindow) {
    getDestWindow(arg.destWindow).webContents.send(IPCMainEnum.renewPlugin, {
      bundleId: arg.bundleId,
    });
  } else {
    getDestWindow('searchWindow').webContents.send(IPCMainEnum.renewPlugin, {
      bundleId: arg ? arg.bundleId : undefined,
    });
    getDestWindow('preferenceWindow').webContents.send(
      IPCMainEnum.renewPlugin,
      {
        bundleId: arg ? arg.bundleId : undefined,
      }
    );
  }
};
