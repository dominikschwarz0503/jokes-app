import "./HamburgerMenu.css";

export default function HamburgerMenu(props: any) {
    const closeHamburgerMenu = () => {
        document
            .querySelector(".hamburger-menu-container")
            ?.classList.add("closed");
    };

    return (
        <>
            <div
                className={
                    props.active
                        ? "hamburger-menu-container active"
                        : "hamburger-menu-container closed"
                }
            >
                <div className="headline-container">
                    <h1>Categories</h1>

                    <svg
                        onClick={closeHamburgerMenu}
                        className="close-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="32px"
                        height="32px"
                    >
                        <g id="surface223157860">
                            <path d="M 8.789062 6.058594 L 6.058594 8.789062 L 21.269531 24 L 5.96875 39.328125 L 8.671875 42.03125 L 24 26.730469 L 39.300781 42.03125 L 42.03125 39.300781 L 26.730469 24 L 41.941406 8.789062 L 39.210938 6.058594 L 24 21.269531 Z M 8.789062 6.058594 " />
                        </g>
                    </svg>
                </div>
                <ul>
                    <li>Memes</li>
                    <li>Dadjokes</li>
                    <li>Chuck Norris Jokes</li>
                </ul>
            </div>
        </>
    );
}
