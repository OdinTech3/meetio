/*eslint-disable semi*/
import path from "path";
import fs from "fs";
import svg2png from "svg2png";
import defaultOptions from "./../src/icons/default.json";

const debug = true;

function __icons(folder) {
    let iconPath;
    fs.readdirSync("./src/icons/svg").forEach(icon => {
        iconPath = path.join(__dirname, `/../src/icons/svg/${icon}`);
        icon = icon.split(".").slice(0, -1).join(".");
        if (debug) console.log(`👁  reading "${icon}" icon.`);
        fs.readFile(iconPath, "utf8",  (err, data) => {
            if (err) throw err;
            data = data.replace("#000", defaultOptions.color);
            data = Buffer.from(data, "utf8");
            defaultOptions.settings.forEach(setting => {
                svg2png(data, { width: setting.size, height: setting.size })
                    .then(buffer => {
                        fs.writeFileSync(`assets/${folder}/${setting.suffix ? icon + setting.suffix : icon}.png`, buffer, (err) => {
                            if (err) {
                                console.log(`🆘 Problme with ${icon}.`);
                                console.log(err);
                            }
                        });
                        console.log(`✅ icon: "${setting.suffix ? icon + setting.suffix : icon}"" was saved!`);
                    })
                    .catch(e => console.error(e));
            });
        });
    });
}

export default function icons() {
    __icons("default");
}
