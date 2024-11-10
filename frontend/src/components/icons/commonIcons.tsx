import { type SVGProps, type ReactElement } from "react";

export const CrossIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
};

export const InfoIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      strokeWidth="1.5"
      fill="currentColor"
      {...props}
    >
      <path d=" M 88.53 12.79 C 106.36 10.49 124.91 13.74 140.82 22.15 C 157.86 31.07 171.83 45.74 179.85 63.23 C 189.56 83.85 190.43 108.29 182.71 129.69 C 176.13 148.10 163.18 164.14 146.60 174.50 C 131.49 184.05 113.40 188.82 95.55 187.77 C 77.60 186.91 59.98 180.33 45.85 169.22 C 30.12 156.96 18.72 139.20 14.28 119.74 C 9.77 100.18 12.23 79.08 21.16 61.10 C 33.78 35.16 59.86 16.31 88.53 12.79 M 97.35 40.59 C 89.52 43.07 84.75 52.16 87.13 60.02 C 89.17 68.10 98.24 73.51 106.31 71.21 C 114.94 69.17 120.43 59.14 117.43 50.78 C 114.97 42.65 105.41 37.53 97.35 40.59 M 74.31 79.39 C 72.06 79.85 70.61 82.74 72.16 84.64 C 74.79 87.30 78.82 87.08 82.23 87.84 C 85.04 88.85 85.13 92.37 84.85 94.86 C 82.42 110.60 79.10 126.21 77.13 142.02 C 76.18 150.74 83.44 158.73 91.91 159.81 C 100.50 160.80 109.92 160.29 117.27 155.23 C 120.12 153.18 123.07 150.96 124.88 147.90 C 125.99 146.02 124.47 142.73 122.05 143.48 C 119.02 144.36 116.68 146.78 113.56 147.44 C 111.38 148.03 108.62 147.94 107.13 145.99 C 105.11 143.17 105.59 139.43 106.14 136.21 C 108.58 122.05 111.27 107.93 113.87 93.80 C 114.55 89.84 116.03 85.56 114.21 81.69 C 113.39 79.68 111.14 78.81 109.09 78.91 C 99.71 78.88 90.33 78.84 80.95 78.83 C 78.73 78.87 76.45 78.74 74.31 79.39 Z" />
    </svg>
  );
};

export const ArrowRightToLine = (
  props: SVGProps<SVGSVGElement>,
): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      stroke-lineJoin="round"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path d="M17 12H3" />
      <path d="m11 18 6-6-6-6" />
      <path d="M21 5v14" />
    </svg>
  );
};

export const PlusCircleIcon = (
  props: SVGProps<SVGSVGElement>,
): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
};

export const PlusIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path d="M8 12h8" />
      <path d="M12 8v8" />
    </svg>
  );
};

export const TickIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};

export const XIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
      stroke="currentColor"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export const EyeOpenIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};
export const EyeClosedIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
      <line x1="2" x2="22" y1="2" y2="22" />
    </svg>
  );
};

export const ChevronDownIcon = (
  props: SVGProps<SVGSVGElement>,
): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export const SettingsIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
};

export const StopWatchIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="10" x2="14" y1="2" y2="2" />
      <line x1="12" x2="15" y1="14" y2="11" />
      <circle cx="12" cy="14" r="8" />
    </svg>
  );
};

export const CalendarIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
};

export const SignInIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path d="M184 83.5l164.5 164c4.7 4.7 4.7 12.3 0 17L184 428.5c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17l132-131.4H12c-6.6 0-12-5.4-12-12v-10c0-6.6 5.4-12 12-12h279.9L160 107.6c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.6-4.7 12.2-4.7 16.9 0zM512 400V112c0-26.5-21.5-48-48-48H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H332c-6.6 0-12 5.4-12 12v8c0 6.6 5.4 12 12 12h132c26.5 0 48-21.5 48-48z" />
    </svg>
  );
};

export const SignOutIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
      {...props}
    >
      <path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z" />
    </svg>
  );
};

export const CollapseArrowIcon = (
  props: SVGProps<SVGSVGElement>,
): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 64 24 20.571"
      fill="currentColor"
      {...props}
    >
      <path d="M 11.5714282989502 82.66964721679688 L 3.616071462631226 74.74107360839844 C 3.364285707473755 74.48928833007812 3.364285707473755 74.08214569091797 3.616071462631226 73.83036041259766 L 11.5714282989502 65.90178680419922 C 11.82321453094482 65.65000152587891 12.23035717010498 65.65000152587891 12.48214340209961 65.90178680419922 L 12.86250019073486 66.28214263916016 C 13.11428642272949 66.53392791748047 13.11428642272949 66.94107055664062 12.86250019073486 67.19285583496094 L 6.648214340209961 73.375 L 23.35714340209961 73.375 C 23.71071434020996 73.375 24 73.66429138183594 24 74.01786041259766 L 24 74.55357360839844 C 24 74.90714263916016 23.71071434020996 75.19642639160156 23.35714340209961 75.19642639160156 L 6.648214340209961 75.19642639160156 L 12.85714340209961 81.37857055664062 C 13.10892868041992 81.63035583496094 13.10892868041992 82.03749847412109 12.85714340209961 82.28929138183594 L 12.47678565979004 82.66964721679688 C 12.23035621643066 82.92143249511719 11.82321453094482 82.92143249511719 11.5714282989502 82.66964721679688 Z M 0.6428571343421936 84.57142639160156 L 1.071428537368774 84.57142639160156 C 1.425000071525574 84.57142639160156 1.714285731315613 84.28214263916016 1.714285731315613 83.92857360839844 L 1.714285731315613 64.64286041259766 C 1.714285731315613 64.28929138183594 1.425000071525574 64 1.071428537368774 64 L 0.6428571343421936 64 C 0.2892857193946838 64 0 64.28929138183594 0 64.64286041259766 L 0 83.92857360839844 C 0 84.28214263916016 0.2892857193946838 84.57142639160156 0.6428571343421936 84.57142639160156 Z"></path>
    </svg>
  );
};

export const OverviewIcon = (props: SVGProps<SVGSVGElement>): ReactElement => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 32 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        id="overview"
        d="M 23.14285659790039 32 L 0.8571428656578064 32 C 0.3837559223175049 32 -1.021793920585878e-07 32.38375854492188 0 32.85714340209961 L 0 55.14286041259766 C 0 55.61624526977539 0.3837558627128601 56 0.8571426868438721 56 L 23.14285659790039 56 C 23.61624336242676 56 24 55.61624526977539 24 55.14286041259766 L 24 32.85714340209961 C 24 32.38375854492188 23.61624336242676 32 23.14285659790039 32 Z M 1.714285731315613 33.71428680419922 L 11.14285755157471 33.71428680419922 L 11.14285755157471 43.14286041259766 L 1.714285731315613 43.14286041259766 L 1.714285731315613 33.71428680419922 Z M 1.714285731315613 54.28571319580078 L 1.714285731315613 44.85714340209961 L 11.14285755157471 44.85714340209961 L 11.14285755157471 54.28571319580078 L 1.714285731315613 54.28571319580078 Z M 22.28571510314941 54.28571319580078 L 12.85714340209961 54.28571319580078 L 12.85714340209961 44.85714340209961 L 22.28571510314941 44.85714340209961 L 22.28571510314941 54.28571319580078 Z M 22.28571510314941 43.14286041259766 L 12.85714340209961 43.14286041259766 L 12.85714340209961 33.71428680419922 L 22.28571510314941 33.71428680419922 L 22.28571510314941 43.14286041259766 Z"
      ></path>
    </svg>
  );
};
