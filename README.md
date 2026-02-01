# Toggle Pinned Apps

## GNOME Shell Extension that adds keybindings for toggling native pinned applications

GNOME Shell comes with two sets of keybindings out of the box: 

* activate the Nth pinned app e.g. `/org/gnome/shell/keybindings/switch-to-application-1` (`<Super>1`)
* open a new Run => Raise => Cycle => Hide. 
window for the Nth pinned app e.g. `/org/gnome/shell/keybindings/open-new-window-application-1` (`<Super><Control>1`)

This extension adds the third set of keybindings e.g. `<Super><Alt>1` that use the following logic: 

* if the app does not have a window, a new app instance is launched
* if the app has only one window and this window is focused, the app window gets minimized
* if the app has multiple windows and one of them is focused, the next app window is activated
* if the app has one or few windows but none of them is focused, the most recent app window is activated

# Motivation

There are at least two recent fully-fledged extensions that aim to achieve similar goals: 

* https://github.com/aaimio/application-hotkeys
* https://github.com/jqno/gnome-happy-appy-hotkey

But I was looking for a simpler way to extend the native dash functionality and possibly upstream the changes into GNOME Shell itself.
