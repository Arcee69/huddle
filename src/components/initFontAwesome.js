import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitter, faFacebook, faInstagram} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faTwitter, faFacebook, faInstagram);
}

export default initFontAwesome;