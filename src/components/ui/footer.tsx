import { Link } from 'react-router-dom'

// Import generic icons from lucide-react
import {
    Globe, // Could represent a website or general online presence
    Share2, // Could represent sharing/social media in general
    MessageCircle, // Could represent communication/social
    Link as LinkIcon, // Renamed to avoid conflict with React Router Link
    Send, // Could represent sending a message, a bit like a paper plane for social
    Feather, // Could be an abstract representation for a 'feed' or 'post'
} from 'lucide-react'

const links = [
    {
        title: 'Union Network',
        href: '#',
    },
    {
        title: 'Stellar Tokens',
        href: '#',
    },
    {
        title: 'Community',
        href: '#',
    },
    {
        title: 'Governance',
        href: '#',
    },
    {
        title: 'Constellation',
        href: '#',
    },
    {
        title: 'About Lyra',
        href: '#',
    },
]

export default function FooterSection() {
    return (
        <footer className="py-16 md:py-32 bg-gradient-to-t from-background/50 to-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <Link
                    to="/"
                    aria-label="go home"
                    className="mx-auto block size-fit">
                    <div className="text-center">
                        <h3 className="text-2xl font-sunshine font-bold bg-gradient-nebula bg-clip-text text-transparent">
                            Lyra Union
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1 font-vanilla">
                            Union of Stars
                        </p>
                    </div>
                </Link>

                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            to={link.href}
                            className="text-muted-foreground hover:text-primary block duration-150 font-vanilla">
                            <span>{link.title}</span>
                        </Link>
                    ))}
                </div>
                <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
                    {/* Using generic icons for social links */}
                    <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Stellar Network" 
                        className="text-muted-foreground hover:text-primary block transition-colors duration-200">
                        <Share2 className="size-6" />
                    </Link>
                    <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Union Chat"
                        className="text-muted-foreground hover:text-primary block transition-colors duration-200">
                        <MessageCircle className="size-6" />
                    </Link>
                    <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Constellation Links"
                        className="text-muted-foreground hover:text-primary block transition-colors duration-200">
                        <LinkIcon className="size-6" />
                    </Link>
                    <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Global Network"
                        className="text-muted-foreground hover:text-primary block transition-colors duration-200">
                        <Globe className="size-6" />
                    </Link>
                    <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Send Signal"
                        className="text-muted-foreground hover:text-primary block transition-colors duration-200">
                        <Send className="size-6" />
                    </Link>
                    <Link
                        to="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Cosmic Journal"
                        className="text-muted-foreground hover:text-primary block transition-colors duration-200">
                        <Feather className="size-6" />
                    </Link>
                </div>
                <span className="text-muted-foreground block text-center text-sm font-vanilla"> 
                    © {new Date().getFullYear()} Lyra Union, All rights reserved • Where resonance becomes governance
                </span>
            </div>
        </footer>
    )
}