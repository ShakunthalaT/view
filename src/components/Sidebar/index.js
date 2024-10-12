import './index.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-button" onClick={toggleSidebar}>
                Close
            </button>
            <div className="sidebar-content">
                <h2>Menu</h2>
                <ul>
                    <li>Inbox</li>
                    <li>Sent</li>
                    <li>Drafts</li>
                    <li>Spam</li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
