import { mobmenu } from "./modules/mobmenu";
import { nav } from "./modules/nav";
import { partnersSlider } from "./modules/partnersSlider";
import { revSlider } from "./modules/revSlider";
import { servSlider } from "./modules/servSlider";
import { teamSlider } from "./modules/teamSlider";

document.addEventListener('DOMContentLoaded', () => {

    servSlider();
    revSlider();
    partnersSlider();
    teamSlider();
    mobmenu();
    nav();

})





