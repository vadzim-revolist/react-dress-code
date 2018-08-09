//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { action } from '@storybook/addon-actions'

import { IEText, IETextArea, IEImage, Label } from '../../src/index'

storiesOf('Molecules > Editor', module)
  .add('Inline text editor',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Enter to save, Esc to cancel">Text input</Label>
          <IEText 
            type="text" 
            defaultValue="Give An Example" 
            onEdit={action("edit")}
            onCommit={action("commit")}
            onCancel={action("cancel")}
          />
        </div>
      )
    )
  )

  .add('Inline textarea editor',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Shift + Enter to save, Esc to cancel, use `white-space: pre-wrap;` to render multi-line text.">Text area</Label>
          <IETextArea
            cols="30" rows="3"
            defaultValue="Give An Example" 
            onEdit={action("edit")}
            onCommit={action("commit")}
            onCancel={action("cancel")}
          />
        </div>
      )
    )
  )

  .add('Inline image editor',
    withInfo('')(
      () => (
        <div>
          <Label sub="click on text to edit, Enter to save, Esc to cancel">Text input</Label>
          <IEImage 
            type="text" 
            defaultValue="http://via.placeholder.com/350x150" 
            onEdit={action("edit")}
            onCommit={action("commit")}
            onCancel={action("cancel")}
          />
        </div>
      )
    )
  )