//
// Copyright (C) 2018 Dmitry Kolesnikov
//
// This file may be modified and distributed under the terms
// of the MIT license. See the LICENSE file for details.
// https://github.com/fogfish/react-dress-code
//
import React from 'react'
import { withInfo } from '@storybook/addon-info'
import { storiesOf } from '@storybook/react'

import { Tab, TabElement } from '../../src/index'

storiesOf('Atoms > Tabs', module)
  .add('Horizontal tabs',
    withInfo('')(
      () => (
        <div>
          <Tab>
            <TabElement header> Header </TabElement>
            <TabElement active> Tab1 </TabElement>
            <TabElement> Tab2 </TabElement>
            <TabElement disabled> Tab3 </TabElement>
            <TabElement> Tab4 </TabElement>
          </Tab>
        </div>
      )
    )
  )

  .add('Vertical tabs',
    withInfo('')(
      () => (
        <div>
          <Tab vertical>
            <TabElement header> Header </TabElement>
            <TabElement active> Tab1 </TabElement>
            <TabElement> Tab2 </TabElement>
            <TabElement disabled> Tab3 </TabElement>
            <TabElement> Tab4 </TabElement>
          </Tab>
        </div>
      )
    )
  )

