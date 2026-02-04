import Meta from "gi://Meta";
import Shell from "gi://Shell";

import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import * as Main from "resource:///org/gnome/shell/ui/main.js";

export default class TogglePinnedAppsExtension extends Extension {
  _toggleApplication(display, window, event, binding) {
    const [, , target] = binding.get_name().split("-");
    const app = Main.wm._getNthFavoriteApp(target - 1);
    if (app) {
      const appWindows = app.get_windows();
      const focusWindow = display.get_focus_window();
      if (
        Main.overview.visible ||
        !appWindows.length ||
        !appWindows.includes(focusWindow)
      ) {
        Main.overview.hide();
        app.activate();
      } else {
        focusWindow.minimize();
      }
    }
  }

  enable() {
    this._settings = this.getSettings();
    for (let i = 1; i <= 9; i++) {
      Main.wm.addKeybinding(
        `toggle-application-${i}`,
        this._settings,
        Meta.KeyBindingFlags.IGNORE_AUTOREPEAT,
        Shell.ActionMode.NORMAL | Shell.ActionMode.OVERVIEW,
        this._toggleApplication.bind(this),
      );
    }
  }

  disable() {
    for (let i = 1; i <= 9; i++) {
      Main.wm.removeKeybinding(`toggle-application-${i}`);
    }
    this._settings = null;
  }
}
