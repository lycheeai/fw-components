const fs = require("fs");
const path = require("path");

function copyFonts(srcDir: string, destDir: string) {
    fs.mkdirSync(destDir, { recursive: true });

    fs.readdirSync(srcDir).forEach(file => {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    });
}

copyFonts(
  path.join("src", "assets", "PPTelegrafFont", "assets"),
  path.join("dist", "assets", "PPTelegrafFont", "assets")
);
copyFonts(
  path.join("src", "assets", "SuisseIntlFont", "assets"),
  path.join("dist", "assets", "SuisseIntlFont", "assets")
);
copyFonts(
  path.join("src", "assets", "PTMonoFont", "assets"),
  path.join("dist", "assets", "PTMonoFont", "assets")
);

console.log("Fonts copied successfully!");