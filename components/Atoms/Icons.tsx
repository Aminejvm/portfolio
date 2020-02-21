import React from "react";
// search,bucket,backward,forward,backward2,forward2
const icons = props => ({
  symbolRight: (
    <svg fill="none" width="24px" height="24px" viewBox={`0 0 24 24`} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.992 6.175l-1.65 1.65L13.517 14l-6.175 6.175 1.65 1.65L16.817 14 8.992 6.175zm5.833 0l-1.65 1.65L19.35 14l-6.175 6.175 1.65 1.65L22.65 14l-7.825-7.825z"
        fill="#3E4C59"
      />
    </svg>
  ),
  symbolLeft: (
    <svg fill="none" width="24px" height="24px" viewBox={`0 0 24 24`} {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.175 21.825l1.65-1.65L8.65 14l6.175-6.175-1.65-1.65L5.35 14l7.825 7.825zm7.483-1.65L14.483 14l6.175-6.175-1.65-1.65L11.183 14l7.825 7.825 1.65-1.65z"
        fill="#3E4C59"
      />
    </svg>
  ),
});

type Props = {
  icon: keyof ReturnType<typeof icons>;
};

const Icon = ({ icon, ...props }: Props & Partial<SVGAElement>): JSX.Element => icons({ props })[icon];
export default Icon;
