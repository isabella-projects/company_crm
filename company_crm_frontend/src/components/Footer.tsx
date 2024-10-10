const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 p-4 text-white text-center">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} Mini-CRM. All rights reserved.</p>
                <p>
                    Developed by{' '}
                    <a
                        href="https://linkedin.com/in/damyan-m-a51790265"
                        about="_blank"
                        className="text-blue-500 font-semibold underline underline-offset-2"
                    >
                        Damyan
                    </a>
                </p>
                <small>
                    Front-end is <span className="font-bold underline underline-offset-2">NOT</span> done. On the other
                    hand, the <span className="font-bold underline underline-offset-2">RESTful API</span> is functional.
                </small>
            </div>
        </footer>
    );
};

export default Footer;
