import {Button, ButtonSize, ButtonType} from "../lib/components/Button/Button.tsx";

function App() {

  return (
      <>
        <Button size={ButtonSize.SMALL} type={ButtonType.PRIMARY}>Small</Button>
        <Button size={ButtonSize.MEDIUM} type={ButtonType.SECONDARY}>Medium</Button>
        <Button size={ButtonSize.LARGE} type={ButtonType.PRIMARY}>Large</Button>
      </>
  )
}

export default App
