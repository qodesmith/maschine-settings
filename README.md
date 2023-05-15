# Mapping Maschine MK3 Controller To Battery 4

The Maschine MK3 MIDI controller has A-H pages for the pads. The sad part is, page A has some pads assigned to the same notes as page B, and so on.

To fix this, we need to use the standalone editor that comes with the Native Instruments Komplete suite called **_Native Instruments Controller Editor_**.

## Steps to map the controller

1. Turn on the MK3
1. Shift + Channel Midi (top left button) to enter MIDI mode
1. Click page A
1. Open the NI Controller Editor
1. Double-click each pad and update the key you want it to correspond to (starting with C-1)
   - Update the pad name in the top section
   - Update the pad note in the middle section
1. Click page B, rinse & repeat

```
MIDI note range for on/off messages are C-2 ⇒ G8
As per the manual, page 326, bullet point on “Note”
```
