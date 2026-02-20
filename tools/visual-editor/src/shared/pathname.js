export function normalizeRoutePathname(inputPathname) {
  if (!inputPathname || inputPathname === "/") {
    return "/";
  }

  const withoutQueryHash = inputPathname.split("?")[0].split("#")[0];
  return withoutQueryHash.length > 1 && withoutQueryHash.endsWith("/")
    ? withoutQueryHash.slice(0, -1)
    : withoutQueryHash;
}

export function normalizedPathname(inputPathname) {
  return normalizeRoutePathname(inputPathname);
}
