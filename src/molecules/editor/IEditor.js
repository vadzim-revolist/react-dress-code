import React from 'react'
import ReactDOM from 'react-dom'
import { dc } from '../../core/dress-code' 
import compose from 'recompact/compose'
import lifecycle from 'recompact/lifecycle'
import withState from 'recompact/withState'
import withHandlers from 'recompact/withHandlers'

const focus = props => {
  props.setEditing(true)
  props.setBuffer(props.defaultValue)
  props.onEdit ? props.onEdit(props.defaultValue) : null
}

const blur = props => {
  props.setEditing(false)
  if (props.buffer === props.defaultValue) {
    props.setBuffer('')
    props.onCancel ? props.onCancel(props.defaultValue) : null
  } else {
    props.setBuffer('')
    props.onCommit ? props.onCommit(props.buffer) : null
  }
}

const cancel = props => {
  props.setEditing(false)
  props.setBuffer('')
  props.onCancel ? props.onCancel(props.defaultValue) : null
} 

const edit_props = ({input, editing, buffer, focus, setInput, setEditing, setValue, setBuffer, onEdit, onCommit, onCancel, ...props}) => (props)

const IEditor = ({Static, Dynamic, commitWithShift, ...props}) => (
  <div className="dc-inline-editor">
    {!props.editing &&
      <Static onClick={() => focus(props)}>
        {props.defaultValue || props.placeholder}
      </Static>
    }
    {props.editing &&
      <Dynamic 
        ref={props.setInput}
        onChange={(e) => props.setBuffer(e.target.value)}
        onBlur={() => blur(props)}
        onKeyDown={(e) => {
          if (e.keyCode === 13 && !commitWithShift) {
            blur(props)
          }

          if (e.keyCode === 13 && commitWithShift && e.shiftKey) {
            blur(props)
          }

          if (e.keyCode === 27) {
            cancel(props)
          }
        }}
        { ...edit_props(props) }
      />
    }
  </div>
)

const IEditorWithFocus = lifecycle({
  componentDidUpdate: props => {
    props.focus()
  }
})(IEditor)

const IEditorWithState = compose( 
  withState('input', 'setInput', null),
  withState('editing', 'setEditing', false),
  withState('buffer', 'setBuffer', ''),
  withHandlers({
    focus: ({ input }) => () => input ? ReactDOM.findDOMNode(input).focus() : null
  }),
)(IEditorWithFocus)

export default IEditorWithState

