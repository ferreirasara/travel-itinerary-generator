import { ReactNode } from "react";

interface MainContainerInnerProps {
  children: ReactNode
}
const MainContainerInner = ({ children }: MainContainerInnerProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '600px' }}>
      {children}
    </div>
  )
}
export default MainContainerInner;