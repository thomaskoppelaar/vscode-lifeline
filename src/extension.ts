import { ExtensionContext, workspace } from 'vscode';
import { Battery } from './lifeline/battery';
import { utils } from './lifeline/utils';

export function activate(context: ExtensionContext) {
  const lifelineBattery = new Battery(utils.getConfig());
  
  utils.batteryCheck().then((val) => {
    if (val) {
      context.subscriptions.push(lifelineBattery);
    } else {
      lifelineBattery.dispose();
    }
  });
  
  context.subscriptions.push(workspace.onDidChangeConfiguration(() => {
    lifelineBattery.updateConfig();
  }));
}

export function deactivate() {
  return null; 
}