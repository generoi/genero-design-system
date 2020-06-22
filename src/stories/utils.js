/**
 * Get remote url for a random mock image.
 */
export function getMockImageUrl(term, width, height, rand) {
  return `https://source.unsplash.com/${width || 500}x${height || 500}/?${
    (term ? encodeURIComponent(term) : '') + (rand ? Math.random() : '')
  }`
}
