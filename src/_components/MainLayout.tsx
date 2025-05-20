import { ReactNode } from "react"

type TProps = {
    children: ReactNode
}

const MainLayout: React.FC<TProps> = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    )
}

export default MainLayout