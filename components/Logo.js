export default function Logo({ className = 'h-10 w-auto', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
      {...props}
    >
      <path d="M40 10 L18 90 M40 10 L62 90 M26 58 H54" strokeWidth="5" />
      <circle cx="40" cy="10" r="6" fill="currentColor" />
      <circle cx="18" cy="90" r="6" fill="currentColor" />
      <circle cx="62" cy="90" r="6" fill="currentColor" />
      <circle cx="40" cy="58" r="5" fill="currentColor" />
    </svg>
  );
}
