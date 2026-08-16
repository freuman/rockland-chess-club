import { chess67, chess67Embed } from '@/lib/chess67'

export default function Chess67Calendar() {
  return (
    <div>
      <div className="elegant-card overflow-hidden p-2 sm:p-4">
        <iframe
          src={chess67Embed.calendar}
          title="The Rockland County Chess Club Calendar"
          loading="eager"
          className="block h-[1100px] w-full rounded-lg border border-amber-600/40 bg-white sm:h-[980px]"
        />
      </div>

      <p
        className="mt-6 text-center text-forest-700"
        style={{ fontFamily: 'var(--font-baskerville)' }}
      >
        Select any event for full details and registration, or{' '}
        <a
          href={chess67.calendar}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-burgundy-700 underline decoration-amber-600/50 underline-offset-4 hover:text-burgundy-800"
        >
          open the full calendar on Chess67
        </a>
        .
      </p>
    </div>
  )
}
