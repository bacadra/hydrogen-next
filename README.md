# hydrogen-next

Fork of [Hydrogen](https://github.com/nteract/hydrogen).

## Installation

To install `hydrogen-next` search for [hydrogen-next](https://web.pulsar-edit.dev/packages/hydrogen-next) in the Install pane of the Pulsar settings or run `ppm install hydrogen-next`. Alternatively, you can run `ppm install bacadra/pulsar-hydrogen-next` to install a package directly from the Github repository.

## Features

- Package works well in Pulsar and PulsarNext.
- Dependencies `jmp` & `zeromq` updated to latest version & fix applied.
- Lib `.ts`. and `.tsx` converted to java script.
- New commands added, e.g. `hydrogen:recalculate-all`.
- Deleted docs, examples & spec to simplify repository maintenance.
- Fixed CSS of React-Table.
- All config `Hydrogen...` renamed to `hydrogen...`.
- Context menu of text-editor cleared.
- Integrated `hydrogen-run` package.

## New concepts

The package introduce two new concepts of evaluation:

- `recalculate`: clear result -> restart kernel -> run calculation,
- `inline`: calculation is going one breakpoint after one instead of pushing all text to python interpreter instantly. This way you got result next to breakpoints. Inline methods inherit all limitations of hydrogen package, e.g. in Python `if ... else ...` is broken.

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
