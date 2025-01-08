'use babel'
/** @jsx React.createElement */

import React from "react"
import { observer } from "mobx-react"
import { RichMedia, Media } from "@nteract/outputs"
import { INSPECTOR_URI } from "../utils"
import Markdown from "./result-view/markdown"

function hide() {
  atom.workspace.hide(INSPECTOR_URI)
  return null
}

const Inspector = observer(({ store: { kernel } }) => {
  if (!kernel) {
    return hide()
  }
  const bundle = kernel.inspector.bundle

  if (
    !bundle["text/html"] &&
    !bundle["text/markdown"] &&
    !bundle["text/plain"]
  ) {
    return hide()
  }

  return (
    <div
      className="native-key-bindings"
      tabIndex={-1}
      style={{
        fontSize: atom.config.get(`hydrogen.outputAreaFontSize`) || "inherit"
      }}
    >
      <RichMedia data={bundle}>
        <Media.HTML />
        <Markdown />
        <Media.Plain />
      </RichMedia>
    </div>
  )
})
export default Inspector
