export interface CardPreviewBackProps {
  readonly cardholder: string;
  readonly cvc: string;
  readonly expirationDate: string;

  readonly fullPan: string;
  readonly className?: string;
}

export function CardPreviewBack({
  cardholder,
  className,
  cvc,
  expirationDate,
  fullPan,
}: CardPreviewBackProps) {
  // Add space after every four digits. This only works for Visa and Mastercard
  const formatFullPan = fullPan.replace(/(.{4})/g, "$1 ");
  return (
    <svg
      className={className}
      width="335"
      height="208"
      viewBox="0 0 335 208"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="335" height="208" rx="8" fill="white" />
      <rect y="20" width="335" height="32" fill="url(#paint0_linear_555_74960)" />
      <text className="paragraph-30" textAnchor="start" x="19" y="141" fill="#101314">
        {formatFullPan}
      </text>
      <text className="paragraph-30" textAnchor="start" x="19" y="165" fill="#101314">
        EXP {expirationDate}
      </text>
      <text className="paragraph-30" textAnchor="start" x="108" y="165" fill="#101314">
        CVC {cvc}
      </text>
      <text className="paragraph-30" textAnchor="start" x="19" y="189" fill="#101314">
        {cardholder}
      </text>
      <circle cx="272" cy="171" r="17" fill="url(#paint1_linear_555_74960)" />
      <circle cx="294" cy="171" r="17" fill="url(#paint2_linear_555_74960)" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M283 183.962C286.671 180.844 289 176.194 289 171C289 165.806 286.671 161.156 283 158.038C279.329 161.156 277 165.806 277 171C277 176.194 279.329 180.844 283 183.962Z"
        fill="#737373"
      />
      <defs>
        <linearGradient
          id="paint0_linear_555_74960"
          x1="-0.500023"
          y1="202.5"
          x2="333"
          y2="-131"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A2AAAD" />
          <stop offset="0.635359" stopColor="#C2C7CA" />
          <stop offset="1" stopColor="#A4ABAE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_555_74960"
          x1="255"
          y1="188"
          x2="289"
          y2="154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6D6E71" />
          <stop offset="0.491713" stopColor="#5A5B5D" />
          <stop offset="1" stopColor="#77787B" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_555_74960"
          x1="277"
          y1="188"
          x2="311"
          y2="154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#C7C8CA" />
          <stop offset="0.502762" stopColor="#B1B3B6" />
          <stop offset="1" stopColor="#C7C8CA" />
        </linearGradient>
      </defs>
    </svg>
  );
}
