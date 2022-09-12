import glob from "fast-glob";
import { promises as fs } from "fs";
import path from "path";

glob(["dist/api/**/*.ts"], { dot: true }).then(async (files: Array<string>) => {
  const types: Array<string> = [];

  const typesPath = path.join("dist", "api", "types.d.ts");

  try {
    await fs.unlink(typesPath);
  } catch {
    /* do nothing */
  }

  await Promise.all(
    files.map(async (file) => {
      if (file === typesPath) return;
      const content = await fs.readFile(file, "utf-8");
      types.push(
        content
          .replace(/export declare /g, "declare ")
          .replace(/export.*/g, ""),
      );
    }),
  );

  fs.writeFile(typesPath, types.join("\n").replace(/\n\n+/g, "\n"));
});
