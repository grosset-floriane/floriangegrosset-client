export const generateImageSrc = (projectSlug, image, size) => {
	if (!image && image.length < 1) return
	return `/assets/images/${projectSlug}/${image.filename}_${image.category}_${size}.${image.extension}`
}
