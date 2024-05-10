import { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode
}
const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}>
      {children}
    </div>
  )
}
export default MainContainer;