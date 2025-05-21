import { ReactNode } from "react"

type TProps = {
    children: ReactNode
}

const MainLayout: React.FC<TProps> = ({ children }) => {
    return (
        <main className="w-full min-h-screen
         max-w-[1300px] mx-auto px-1 py-2 my-2">
            {children}
        </main>
    )
}

export default MainLayout