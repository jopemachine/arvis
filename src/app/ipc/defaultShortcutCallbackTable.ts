import toggleSearchWindow from './toggleSearchWindow';
import toggleClipboardManagerWindow from './mainProcessEventHandler/windowManage/toggleClipboardManagerWindow';

/**
 * @summary This is a table of callback functions that always require key binding, such as calling searchWindow.
 */
export default {
  toggleSearchWindow: () => () => {
    toggleSearchWindow({ showsUp: false });
  },
  toggleClipboardManagerWindow: () => () => {
    toggleClipboardManagerWindow({ showsUp: false });
  },
};
