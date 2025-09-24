export function useImageKit () {
  const imageKitUrl = import.meta.env.VITE_IMAGE_URL

  const getImageUrl = (path, options = "") => {
    return `${imageKitUrl}/${path}${options ? `?tr=${options}`: ""}`
  }

  return {getImageUrl}
}
