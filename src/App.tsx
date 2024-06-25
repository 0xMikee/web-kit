import "./styles/global.scss";
import {Button, ButtonColor, ButtonSize, ButtonVariant} from "../lib/components/Button/Button.tsx";

function App() {

  return (
      <>
        <Button size={ButtonSize.SMALL} color={ButtonColor.SECONDARY} variant={ButtonVariant.FADED}>Medium</Button>
        <Button size={ButtonSize.LARGE} color={ButtonColor.SECONDARY} variant={ButtonVariant.BORDERED}>Large</Button>
      </>
  )
}

export default App
