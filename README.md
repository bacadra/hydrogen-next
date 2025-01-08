# hydrogen-next

A package provide an interactive coding environment that supports Python, R, JavaScript and other Jupyter kernels.

![demo](https://github.com/bacadra/pulsar-hydrogen-next/blob/master/assets/demo.gif?raw=true)

## Installation

To install `hydrogen-next` search for [hydrogen-next](https://web.pulsar-edit.dev/packages/hydrogen-next) in the Install pane of the Pulsar settings or run `ppm install hydrogen-next`. Alternatively, you can run `ppm install bacadra/pulsar-hydrogen-next` to install a package directly from the Github repository.

## Useful links

- https://github.com/nteract/hydrogen
- https://nteract.gitbooks.io/hydrogen/content/
- https://blog.nteract.io/hydrogen-interactive-computing-in-atom-89d291bcc4dd

## Features

Featues of `hydrogen` & `hydrogen-next`:

- Execute a line, selection, or block at a time.
- Rich media support for plots, images, and video.
- Watch expressions let you keep track of variables and re-run snippets after every change.
- Completions from the running kernel, just like autocomplete in the Chrome dev tools.
- Code can be inspected to show useful information provided by the running kernel.
- One kernel per language (so you can run snippets from several files, all in the same namespace).
- Interrupt or restart the kernel if anything goes wrong.
- Use a custom kernel connection (for example to run code inside Docker), read more in the "Custom kernel connection (inside Docker)" section.

Featues of `hydrogen-next`:

- Package works well in Pulsar and PulsarNext.
- Dependencies `jmp` & `zeromq` updated to latest version & fix applied.
- Lib `.ts`. and `.tsx` converted to java script.
- New commands added, e.g. `hydrogen:recalculate-all`, `hydrogen-run:run-all-inline`.
- Deleted docs, examples & spec to simplify repository maintenance.
- Fixed CSS of React-Table.
- All config `Hydrogen...` renamed to `hydrogen...`.
- Context menu of text-editor cleared.
- Integrated `hydrogen-run` package.

## Alternative keymaps

For Windows/Lines:

```cson
'.platform-win32 atom-text-editor:not([mini]), .platform-linux atom-text-editor:not([mini])':
  'ctrl-enter'  : 'hydrogen:run'
  'shift-enter' : 'hydrogen:run-and-move-down'
  'f5'          : 'hydrogen:run-all'
  'alt-f5'      : 'hydrogen-run:recalculate-all'
  'shift-f5'    : 'hydrogen:run-all-above'
  'ctrl-f5'     : 'hydrogen-run:recalculate-all-above'
  'f6'          : 'hydrogen-run:run-all-inline'
  'alt-f6'      : 'hydrogen-run:recalculate-all-inline'
  'shift-f6'    : 'hydrogen-run:run-all-above-inline'
  'ctrl-f6'     : 'hydrogen-run:recalculate-all-above-inline'
  'f7'          : 'hydrogen:run'
  'ctrl-f7'     : 'hydrogen:run-cell'
  'alt-f7'      : 'hydrogen-run:clear-and-center'
  'shift-f7'    : 'hydrogen:interrupt-kernel'
  'f8'          : 'hydrogen:run-and-move-down'
  'ctrl-f8'     : 'hydrogen:run-cell-and-move-down'
  'alt-f8'      : 'hydrogen-run:clear-and-restart'
  'shift-f8'    : 'hydrogen:shutdown-kernel'
  'f9'          : 'hydrogen:toggle-inspector'
```

For MacOS:

```cson
'.platform-win32 atom-text-editor:not([mini]), .platform-linux atom-text-editor:not([mini])':
  'cmd-enter'   : 'hydrogen:run'
  'shift-enter' : 'hydrogen:run-and-move-down'
  'f5'          : 'hydrogen:run-all'
  'alt-f5'      : 'hydrogen-run:recalculate-all'
  'shift-f5'    : 'hydrogen:run-all-above'
  'cmd-f5'      : 'hydrogen-run:recalculate-all-above'
  'f6'          : 'hydrogen-run:run-all-inline'
  'alt-f6'      : 'hydrogen-run:recalculate-all-inline'
  'shift-f6'    : 'hydrogen-run:run-all-above-inline'
  'cmd-f6'      : 'hydrogen-run:recalculate-all-above-inline'
  'f7'          : 'hydrogen:run'
  'cmd-f7'      : 'hydrogen:run-cell'
  'alt-f7'      : 'hydrogen-run:clear-and-center'
  'shift-f7'    : 'hydrogen:interrupt-kernel'
  'f8'          : 'hydrogen:run-and-move-down'
  'cmd-f8'      : 'hydrogen:run-cell-and-move-down'
  'alt-f8'      : 'hydrogen-run:clear-and-restart'
  'shift-f8'    : 'hydrogen:shutdown-kernel'
  'f9'          : 'hydrogen:toggle-inspector'
```

# Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub — any feedback’s welcome!

Thanks to [@mauricioszabo](https://github.com/mauricioszabo) for showing me a way to get hydrogen to work in the latest Electron.
