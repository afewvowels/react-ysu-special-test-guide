import footAndToe from '../data/foot-and-toe';
import ankle from '../data/foot-and-toe';
import knee from '../data/foot-and-toe';
import headAndFace from '../data/foot-and-toe';
import hipAndPelvis from '../data/foot-and-toe';
import cervicalSpine from '../data/foot-and-toe';
import thoracicAndLumbarSpine from '../data/foot-and-toe';
import shoulder from '../data/foot-and-toe';
import elbow from '../data/foot-and-toe';
import wristAndHand from '../data/foot-and-toe';

export default function selectSystem(param) {
    switch(param) {
        case "Foot & Toe":
            return footAndToe;
        case "Ankle":
            return ankle;
        case "Knee":
            return knee;
        case "Head & Face":
            return headAndFace;
        case "Hip & Pelvis":
            return hipAndPelvis;
        case "Cervical Spine":
            return cervicalSpine;
        case "Thoracic & Lumbar Spine":
            return thoracicAndLumbarSpine;
        case "Shoulder":
            return shoulder;
        case "Elbow":
            return elbow;
        case "Wrist & Hand":
            return wristAndHand;
        default:
            return null;
    }
}