import footAndToe from '../data/foot-and-toe.js';
import ankle from '../data/ankle.js';
import knee from '../data/knee.js';
import headAndFace from '../data/head-and-face.js';
import hipAndPelvis from '../data/hip-and-pelvis.js';
import cervicalSpine from '../data/cervical-spine.js';
import thoracicAndLumbarSpine from '../data/thoracic-and-lumbar-spine.js';
import shoulder from '../data/shoulder.js';
import elbow from '../data/elbow.js';
import wristAndHand from '../data/wrist-and-hand.js';

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