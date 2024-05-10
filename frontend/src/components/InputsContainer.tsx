import { ReactNode } from "react";

interface InputsContainerProps {
  children: ReactNode
}
const InputsContainer = ({ children }: InputsContainerProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
      {children}
    </div>
  )
}
export default InputsContainer;