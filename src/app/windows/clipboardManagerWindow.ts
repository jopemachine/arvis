import { BrowserWindow } from 'electron';
import path from 'path';
import constants from '../constants';

const createClipboardManagerWindow = () => {
  const clipboardManagerWindow = new BrowserWindow({
    title: 'ClipboardManagerWindow',
    center: true,
    show: false,
    frame: false,
    resizable: true,
    disableAutoHideCursor: true,
    skipTaskbar: true,
    movable: true,
    fullscreenable: false,
    width: constants.clipboardManagerWindowWidth,
    height: constants.clipboardManagerWindowHeight,
    transparent: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
    },
  });

  const filePath =
    process.env.NODE_ENV === 'development'
      ? path.join(__dirname, '../../', 'app.html')
      : path.join(__dirname, 'app.html');

  clipboardManagerWindow.loadFile(filePath, {
    query: { window: 'clipboardManagerWindow' },
  });

  clipboardManagerWindow.on('close', (e) => {
    e.preventDefault();
    if (clipboardManagerWindow) {
      clipboardManagerWindow.hide();
    }
  });

  clipboardManagerWindow.on('blur', () => {
    clipboardManagerWindow.hide();
  });

  return clipboardManagerWindow;
};

export { createClipboardManagerWindow };
