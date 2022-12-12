export function generateImageSrc(projectSlug, image, size) {
	if (!image && image.length < 1) return
	return `/assets/images/${projectSlug}/${image.filename}_${image.category}_${size}.${image.extension}`
}

// export const renderLink = React.useMemo(
//     () =>
//       React.forwardRef((itemProps, ref) => {
//         return <Link to={to} ref={ref} {...itemProps} role={undefined} />;
//       }),
//     [to],
//   );
