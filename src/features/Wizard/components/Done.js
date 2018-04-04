import { Button, Icon } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import React from 'react';
import { encodeStateToString } from 'utils/helpers'

const WizardDone = ({ setIndex, index, blocks }) => (<div>
    <div style={{ textAlign: 'center'}}>
    <Icon size={'huge'} style={{ color: 'white' }} name={'checkmark'} />
    </div>
    <h1
      style={{
        textAlign: 'center',
        fontSize: '60px',
        color: 'white',
      }}>
      DONE!
    </h1>
    <Button
      size={'huge'}
      fluid
      as={Link}
      to={`/results/${encodeStateToString({ blocks })}`}
      onClick={() => setIndex(index + 1)}>
      Show results
    </Button>
  </div>)




export { WizardDone} 