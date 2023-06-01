export default function Image({
  src,
  alt = '',
}: {
  src: string;
  alt?: string;
}) {
  if (import.meta.env.IMAGE_URL) {
    const url = src.replace(/.*\/(.*)/, '$1');
    return <img src={'/images/' + url} alt={alt} />;
  }

  return <img src={src} alt={alt} />;
}
