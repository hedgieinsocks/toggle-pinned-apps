import Adw from "gi://Adw";
import Gtk from "gi://Gtk";

import { ExtensionPreferences } from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js";

export default class TogglePinnedAppsPreferences extends ExtensionPreferences {
  fillPreferencesWindow(window) {
    const page = new Adw.PreferencesPage();
    const group = new Adw.PreferencesGroup({
      title: "Keybindings",
      description: "Configure keybindings for toggling pinned applications",
    });
    window.add(page);
    page.add(group);

    window._settings = this.getSettings();

    for (let i = 1; i <= 9; i++) {
      const key = `toggle-application-${i}`;
      const row = new Adw.EntryRow({
        title: `Pinned application #${i}`,
      });

      const binding = window._settings.get_strv(key);
      row.text = binding.length > 0 ? binding[0] : "";

      row.connect("changed", () => {
        const shortcutText = row.text.trim();
        const [success, keyval, mods] = Gtk.accelerator_parse(shortcutText);
        if (success && Gtk.accelerator_valid(keyval, mods)) {
          const shortcut = Gtk.accelerator_name(keyval, mods);
          window._settings.set_strv(key, [shortcut]);
          row.remove_css_class("error");
        } else {
          row.add_css_class("error");
        }
      });

      group.add(row);
    }
  }
}
