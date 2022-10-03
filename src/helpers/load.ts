export const load = (path: string): string | undefined => {
  if (!("XMLHttpRequest" in globalThis)) {
    throw new Error("XMLHttpRequest required to load files");
  }

  path = path.toLowerCase();
  const lastFinalPath = localStorage.getItem("load_" + path);
  if (lastFinalPath) path = lastFinalPath;

  const req = new XMLHttpRequest();
  req.open("GET", path, false);

  req.send();

  if (req.status >= 400) {
    req.open(
      "GET",
      // `https://www.hiveworkshop.com/assets/wc3/war3.w3mod/${path}`,
      `https://www.hiveworkshop.com/casc-contents?path=${path}`,
      false,
    );
    req.send();
  }

  if (req.status >= 400) return;

  localStorage.setItem("load_" + path, req.responseURL);

  return req.response;
};
