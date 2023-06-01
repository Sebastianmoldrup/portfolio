export default function LsShortcode({ name }: { name: string }) {
  return (
    <div class='mb-4 flex flex-col items-center'>
      <img />
      <a
        class='rounded bg-blue-500 px-6 py-3 text-2xl text-white no-underline'
        href={'/goto/' + name}
      >
        {name}
      </a>
    </div>
  );
}
