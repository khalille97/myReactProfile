import React from "react";
import {FaTwitter, FaDiscord, FaTelegram, FaGithub, FaLinkedin} from "react-icons/fa";

function Footer(){
    return(
        <footer className="icon-tray">
            <a href="https://twitter.com/_Khalille" target="-blank" ><FaTwitter /></a> <a href="discordapp.com/users/992577439987417168" target="-blank"><FaDiscord /></a> <a href="t.me/khalille01" target="-blank"><FaTelegram /></a> <a href="https://github.com/khalille97" target="-blank"><FaGithub /></a> <a href="https://www.linkedin.com/in/ibraheem-adeshola-76118613a/" target="-blank"><FaLinkedin /></a> 
        </footer>
    )
}
export default Footer