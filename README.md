# Lfln

A stripped-down fork of [Lifeline](https://github.com/kjhx/vscode-lifeline#readme). Essentially strips away the clock and updates the default battery polling rate to 120 seconds.

A Visual Studio Code extensions that shows ~~a clock and~~ the current battery state in the status bar.

## Features
~~Lifeline~~ Lfln presents the ~~time and~~ battery level of your laptop in the bottom right of the status bar. It tries to always be the the rightmost item. ~~By default, it displays the time on the right and the battery on the left. You can swap the positioning (and the time format) in the extension settings.~~ It contains no styling of its own, so the status bar items will always match your theme of choice.

~~Lifeline~~ Lfln will also indicate if laptop is charging. It will not show the battery status at all if one is not detected.

## Preview
| Device unplugged | Device charging |
| - | - |
| ![Device unplugged](./media/device-unplugged.png) | ![Device charging](./media/device-charging.png) |

## Configuration

### `lifeline.battery.interval`
Set the polling interval for the battery in ms. Ignored if device has no battery. By default, set to 120000ms.
