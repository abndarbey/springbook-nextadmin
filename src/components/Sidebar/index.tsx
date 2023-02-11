import { useState } from 'react'
import SimpleSidebar from './SimpleSidebar'
import MiniSidebar from './MiniSidebar'
import NestedSidebar from './NestedSidebar'
// import NestedColoredSidebar from './NestedColoredSidebar'
// import SimpleColoredSidebar from './SimpleColoredSidebar'


interface ISidebarProps {
    width: number
}

export default function Sidebar(props: ISidebarProps) {
    const [isOpen, setIsOpen] = useState(true)
    const toggleSidbar = () => {
        setIsOpen(!isOpen)
    }
    return (
        // isOpen ? <SimpleSidebar
        //     width={props.width}
        //     toggleSidbar={toggleSidbar}
        // /> : <MiniSidebar
        //     toggleSidbar={toggleSidbar}
        // />
        
        isOpen ? <NestedSidebar
        width={props.width}
        toggleSidbar={toggleSidbar}
        /> : <MiniSidebar
        toggleSidbar={toggleSidbar}
        />
        // <NestedColoredSidebar />
        // <MiniSidebar />
        // <SimpleColoredSidebar />
    )
}