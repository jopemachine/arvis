/**
 * Events sent from renderer process to main process
 */
export enum IPCRendererEnum {
  autoFitSearchWindowSize                    = '@ipcRenderer/autoFitSearchWindowSize',
  dispatchAction                             = '@ipcRenderer/dispatchAction',
  getElectronEnvs                            = '@ipcRenderer/getElectronEnvs',
  getSystemFont                              = '@ipcRenderer/getSystemFont',
  hideClipboardHistoryWindow                 = '@ipcRenderer/hideClipboardHistoryWindow',
  hideLargeTextWindow                        = '@ipcRenderer/hideLargeTextWindow',
  hideSearchWindow                           = '@ipcRenderer/hideSearchWindow',
  importTheme                                = '@ipcRenderer/importTheme',
  openExtensionInstallerFile                 = '@ipcRenderer/openExtensionInstallerFile',
  openPluginInstallFileDialog                = '@ipcRenderer/openPluginInstallFileDialog',
  openWorkflowInstallFileDialog              = '@ipcRenderer/openWorkflowInstallFileDialog',
  openYesnoDialog                            = '@ipcRenderer/openYesnoDialog',
  popupClipboardHistoryContextMenu           = '@ipcRenderer/popupClipboardHistoryContextMenu',
  popupPluginItemMenu                        = '@ipcRenderer/popupPluginItemMenu',
  popupSearchbarItemMenu                     = '@ipcRenderer/popupSearchbarItemMenu',
  popupWorkflowItemMenu                      = '@ipcRenderer/popupWorkflowItemMenu',
  popupWorkflowTriggerTableItem              = '@ipcRenderer/popupWorkflowTriggerTableItem',
  registerAllShortcuts                       = '@ipcRenderer/registerAllShortcuts',
  reloadApplication                          = '@ipcRenderer/reloadApplication',
  reloadPlugin                               = '@ipcRenderer/reloadPlugin',
  reloadWorkflow                             = '@ipcRenderer/reloadWorkflow',
  resizeSearchWindowHeight                   = '@ipcRenderer/resizeSearchWindowHeight',
  resumeFileWatch                            = '@ipcRenderer/resumeFileWatch',
  saveFile                                   = '@ipcRenderer/saveFile',
  setAutoLaunch                              = '@ipcRenderer/setAutoLaunch',
  setGlobalShortcut                          = '@ipcRenderer/setGlobalShortcut',
  setSearchWindowWidth                       = '@ipcRenderer/setSearchWindowWidth',
  showErrorDialog                            = '@ipcRenderer/showErrorDialog',
  showLargeTextWindow                        = '@ipcRenderer/showLargeTextWindow',
  showNotification                           = '@ipcRenderer/showNotification',
  stopFileWatch                              = '@ipcRenderer/stopFileWatch',
  toggleClipboardHistoryWindow               = '@ipcRenderer/toggleClipboardHistoryWindow',
  toggleMacDock                              = '@ipcRenderer/toggleMacDock',
  toggleSearchWindow                         = '@ipcRenderer/toggleSearchWindow',
  triggerDoubleModifierKey                   = '@ipcRenderer/triggerDoubleModifierKey',
  triggerKeyDownEvent                        = '@ipcRenderer/triggerKeyDownEvent',
  triggerSingleKeyPressEvent                 = '@ipcRenderer/triggerSingleKeyPressEvent',
  unregisterAllShortcuts                     = '@ipcRenderer/unregisterAllShortcuts',
}

/**
 * Events sent from main process to renderer process
 */
export enum IPCMainEnum {
  autoFitSearchWindowSizeRet                 = '@ipcMain/autoFitSearchWindowSizeRet',
  executeAction                              = '@ipcMain/executeAction',
  fetchAction                                = '@ipcMain/fetchAction',
  forwardClipboardData                       = '@ipcMain/forwardClipboardData',
  forwardLargeText                           = '@ipcMain/forwardLargeText',
  getElectronEnvsRet                         = '@ipcMain/getElectronEnvsRet',
  getSystemFontRet                           = '@ipcMain/getSystemFontRet',
  hideSearchWindowByBlurEvent                = '@ipcMain/hideSearchWindowByBlurEvent',
  importThemeRet                             = '@ipcMain/importThemeRet',
  openPluginInstallFileDialogRet             = '@ipcMain/openPluginInstallFileDialogRet',
  openWorkflowInstallFileDialogRet           = '@ipcMain/openWorkflowInstallFileDialogRet',
  openYesnoDialogRet                         = '@ipcMain/openYesnoDialogRet',
  pinClipboardHistoryWindow                  = '@ipcMain/pinClipboardHistoryWindow',
  pinSearchWindow                            = '@ipcMain/pinSearchWindow',
  registerAllShortcuts                       = '@ipcMain/registerAllShortcuts',
  reloadPlugin                               = '@ipcMain/reloadPlugin',
  reloadWorkflow                             = '@ipcMain/reloadWorkflow',
  renewClipboardStore                        = '@ipcMain/renewClipboardStore',
  resetReduxStore                            = '@ipcMain/resetReduxStore',
  saveFileRet                                = '@ipcMain/saveFileRet',
  searchWindowShowCallback                   = '@ipcMain/searchWindowShowCallback',
  setPreferencePage                          = '@ipcMain/setPreferencePage',
  setSearchbarInput                          = '@ipcMain/setSearchbarInput',
  togglePluginsEnabled                       = '@ipcMain/togglePluginsEnabled',
  toggleWorkflowsEnabled                     = '@ipcMain/toggleWorkflowsEnabled',
}
