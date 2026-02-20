import Link from 'next/link';

interface LocationCardProps {
  name: string;
  slug: string;
  description: string;
  icon?: string;
}

export default function LocationCard({ name, slug }: LocationCardProps) {
  return (
    <Link href={`/locations/${slug}`}>
      <div className="group bg-white p-4 rounded-lg border border-dark-200 hover:border-primary-500 hover:shadow-md transition-all duration-200 text-center">
        <div className="text-2xl mb-2">📍</div>
        <h3 className="text-base font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">{name}</h3>
        <span className="text-xs text-primary-600 font-medium inline-flex items-center justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
          View Details →
        </span>
      </div>
    </Link>
  );
}
