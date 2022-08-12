import React from "react";
import styles from "./socialContact.module.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faTwitch, faDiscord} from "@fortawesome/free-brands-svg-icons";

const SocialContact = () => {
    const {
        socialIcons,
        navigateLink,
        navigateLinkActive,
    } = styles;
    return (
        <ul className={`${socialIcons}`}>
            <li className="nav-item px-2">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? `${navigateLinkActive}` : `${navigateLink}`
                    }
                    to={"*"}
                >
                    <FontAwesomeIcon icon={faTwitch} ></FontAwesomeIcon>
                </NavLink>
            </li>
            <li className="nav-item px-2">
                <NavLink className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                } to="*">
                    <FontAwesomeIcon icon={faDiscord} ></FontAwesomeIcon>
                </NavLink>
            </li>
            <li className="nav-item px-2">
                <NavLink className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                } to={"*"}>
                    <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon>
                </NavLink>
            </li>
            <li className="nav-item px-2">
                <NavLink className={({ isActive }) =>
                    isActive ? `${navigateLinkActive}` : `${navigateLink}`
                } to={"*"}>
                    <FontAwesomeIcon icon={faQuestionCircle} ></FontAwesomeIcon>
                </NavLink>
            </li>
        </ul>
    );
};

export default SocialContact
