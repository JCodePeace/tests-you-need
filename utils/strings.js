function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function slugify(str) {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

module.exports = { capitalize, slugify };

function truncate(str, len = 20) {
  return str.length > len ? str.slice(0, len) + "..." : str;
}

module.exports.truncate = truncate;
