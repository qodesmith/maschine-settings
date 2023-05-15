import {useMemo} from 'react'
import './App.css'

const letters = 'ABCDEFGH'.split('')
const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const notesLength = notes.length
const noteIndexStart = -2

export default function App() {
  const data = useMemo(createData, [])

  return (
    <>
      <h1>Mapping Maschine MK3 Controller To Battery 4</h1>
      <div>
        <em>
          Starting with pad page 1, pad 1, and note C-2, we map MIDI notes 0-127
          (C-2 - G8) through all pages and pads.
        </em>
      </div>
      <ul>
        <li>
          <a href="https://www.notion.so/qodesmith/Mapping-Maschine-MK3-Controller-To-Battery-4-00c6fe3b778a4f7c8a2cae3850b670e2">
            Notion link
          </a>
        </li>
        <li>
          <a href="https://www.native-instruments.com/fileadmin/drivers/all_users/Controller_Editor_Manual_English.pdf">
            Controller Editor manual
          </a>
        </li>
      </ul>

      <hr />

      <pre>
        <code>{data}</code>
      </pre>
    </>
  )
}

function createData() {
  return letters.map((letter, i) => {
    return `<group name="Pad Page ${letter}" color-index="9">
  ${createPads(i).join('\n  ')}
</group>
`
  })
}

function createPads(letterIndex: number) {
  return Array.from({length: 16}).map((_, i) => {
    const padNum = i + 1
    const overallCount = letterIndex * 16 + padNum
    const overallIndex = overallCount - 1
    const note = notes[overallIndex % notesLength]
    const totalScaleIterations = Math.floor(overallIndex / notesLength)
    const scaleNum = totalScaleIterations + noteIndexStart

    return `<pad subtype="trigger" version="1" id="Pad${padNum}">
    <name>${note}${scaleNum.toString()}</name>
    <note>${overallIndex}</note>
    <channel>0</channel>
    <min>0</min>
    <max>127</max>
    <default>0</default>
    <last>0</last>
    <lastExt>0</lastExt>
    <behavior onIfDown="on">gate</behavior>
    <reaction>ondown</reaction>
  </pad>
  <led version="1" id="Pad${padNum}IDX">
    <display type="0">
      <unit color-type="1" color-mode="0" color-on-index="2" color-off-index="1" />
    </display>
    <note>${overallIndex}</note>
    <channel>0</channel>
    <min>0</min>
    <max>127</max>
    <default>0</default>
    <last>0</last>
  </led>
  <pad subtype="pressure" version="1" id="Pressure${padNum}">
    <polyat>${12 + i}</polyat>
    <channel>0</channel>
    <min>0</min>
    <max>127</max>
    <default>0</default>
    <last>0</last>
    <lastExt>0</lastExt>
    <behavior onIfDown="on">toggle</behavior>
    <reaction>ondown</reaction>
  </pad>`
  })
}
