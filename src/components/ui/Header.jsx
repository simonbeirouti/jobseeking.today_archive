export default function PageHeader({ title, description }) {
  return (
    <div className="px-6 py-12 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-2 text-4xl font-bold tracking-tight sm:text-6xl">
          {title}
        </h2>
        <p className="mt-6 text-lg leading-8">{description}</p>
      </div>
    </div>
  );
}
