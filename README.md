# Toggle Pinned Apps

GNOME Shell Extension that adds keybindings for toggling native pinned applications.

## Features

GNOME Shell comes with two sets of keybindings out of the box: 

* activate (run-or-raise) the Nth pinned app e.g. `/org/gnome/shell/keybindings/switch-to-application-1` (`<Super>1`)
* open a new window for the Nth pinned app e.g. `/org/gnome/shell/keybindings/open-new-window-application-1` (`<Super><Control>1`)

This extension adds the third set of keybindings e.g. `<Super><Alt>1` that use the following logic: 

* if the focused window belongs to the app, minimize the focused window
* if the focused window does not belong to the app, activate the app (usual `switch-to-application-X` behaviour)

## Motivation

There are at least two recent fully-fledged extensions that aim to achieve similar goals: 

* https://github.com/aaimio/application-hotkeys
* https://github.com/jqno/gnome-happy-appy-hotkey

But I was looking for a simpler way to extend the native dash functionality and possibly [upstream](https://gitlab.gnome.org/GNOME/gnome-shell/-/merge_requests/4061) the changes into GNOME Shell itself.
