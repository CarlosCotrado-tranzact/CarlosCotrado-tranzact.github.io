import React, { useState } from 'react'
import { Button } from '../../components'
import { ECContainer, ECFooterSection } from './styles'

export interface MainProps {
  list: string[]
  isVisible?: boolean
}

const Main: React.FC<MainProps> = ({ list, isVisible = false }) => {
  const [showStack, setShowStack] = useState(isVisible)
  const stackList = list.map(item => <li key={item}>{item}</li>)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const onClickHandler = () => {
    setShowStack(!showStack)
  }

  return (
    <>
      <ECContainer>
        <ECFooterSection>
          <Button onClick={() => onClickHandler()}>
            {!showStack ? 'Show Stack' : 'Hide Stack'}
          </Button>
        </ECFooterSection>
      </ECContainer>
      {showStack ? <ul>{stackList}</ul> : null}
    </>
  )
}

export default Main
