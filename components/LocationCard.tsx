import Link from 'next/link';

interface LocationCardProps {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

export default function LocationCard({ name, slug }: LocationCardProps) {
  return (
    <Link href={`/locations/${slug}`} className="group block h-full">
      <div className="h-full bg-white p-4 sm:p-5 rounded-2xl border border-dark-200/80 hover:border-dark-300 hover:shadow-card hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between">
        <div>
          <div className="w-8 h-8 rounded-xl bg-dark-50 border border-dark-200/60 flex items-center justify-center text-dark-700 mb-3 group-hover:bg-primary-50 group-hover:border-primary-200 group-hover:text-primary-600 transition-colors">
            <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 7.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className="text-sm font-semibold text-dark-900 group-hover:text-primary-600 transition-colors line-clamp-1">
            {name}
          </h3>
        </div>

        <div className="mt-3 pt-2.5 border-t border-dark-100 flex items-center justify-between text-[11px] text-dark-500 font-medium">
          <span>Hub pickup</span>
          <span className="text-primary-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
            Details <span>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
