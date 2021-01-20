import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg"
                alt=""/>
        </header>
    );
}

export default Header;