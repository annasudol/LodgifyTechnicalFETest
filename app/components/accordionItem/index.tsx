import {
  AccordionItem as Item,
  AccordionItemProps,
} from "@szhsin/react-accordion";
import Image from "next/image";
import classNames from "classnames";
/**
 * @type {React.ExoticComponent<import('@szhsin/react-accordion').AccordionItemProps>}
 */
interface AccordionItem extends AccordionItemProps {
  title: string;
  isCompleted: boolean;
}
const AccordionItem: React.FC<AccordionItem> = ({
  title,
  isCompleted,
  ...rest
}) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex justify-between w-full">
        <p className="flex items-center text-customGrey-300">
          <svg
            width="15"
            height="17"
            viewBox="0 0 15 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.624 4.06651H4.22396C4.11378 4.07313 4.00576 4.03393 3.92547 3.95819C3.84518 3.88244 3.79976 3.77689 3.79996 3.66651C3.74797 2.90857 4.16315 2.19547 4.84796 1.86651C5.04052 1.77236 5.2451 1.70506 5.45596 1.66651C5.61868 0.704292 6.45208 0 7.42796 0C8.40383 0 9.23723 0.704292 9.39995 1.66651C9.61011 1.71833 9.81204 1.7991 9.99995 1.90651C10.6629 2.23526 11.0658 2.92774 11.024 3.66651C11.024 3.88742 10.8449 4.06651 10.624 4.06651ZM5.82384 2.46651C5.60113 2.4773 5.38314 2.53453 5.18384 2.63451C4.92865 2.75978 4.74143 2.99088 4.67184 3.26651H10.1998C10.1197 2.98124 9.9134 2.74837 9.63984 2.63451C9.44055 2.53453 9.22255 2.4773 8.99984 2.46651C8.77893 2.46651 8.59984 2.28742 8.59984 2.06651C8.59984 1.40377 8.06258 0.866511 7.39984 0.866511C6.7371 0.866511 6.19984 1.40377 6.19984 2.06651C6.20022 2.27838 6.03533 2.4538 5.82384 2.46651ZM7.14398 1.78651C7.21783 1.71114 7.31847 1.66801 7.42398 1.66651C7.52967 1.66713 7.63064 1.7104 7.70398 1.78651C7.81602 1.90079 7.84917 2.07086 7.78823 2.21885C7.72729 2.36684 7.58401 2.46426 7.42398 2.46651C7.31 2.47268 7.19901 2.42886 7.11998 2.34651C7.04533 2.27217 7.00233 2.17184 6.99998 2.06651C7.00674 1.95715 7.05895 1.85562 7.14398 1.78651ZM0.599976 16.0665H14.2V2.6905H11.8V3.4905H13.448V15.2665H1.39998V3.4905H2.84798V2.6905H0.599976V16.0665ZM8.59998 12.8665H3.79998V12.0665H8.59998V12.8665ZM3.79998 10.4665H8.59998V9.66651H3.79998V10.4665ZM10.2 8.06651H3.79998V7.26651H10.2V8.06651Z"
              fill={!isCompleted ? "#333333" : "#00B797"}
            />
          </svg>

          <span
            className={`${!isCompleted ? "text-customGrey-300" : "text-successGreen"}`}
          >
            {title}
          </span>
        </p>
        <div className="flex">
          <span className="text-sm mr-1 text-customGrey-200">
            {isEnter ? "Hide" : "Show"}
          </span>
          <Image
            className={classNames(
              "ml-auto transition-transform duration-200 ease-out w-auto h-auto",
              { isEnter: "rotate-180" },
            )}
            width={15}
            height={15}
            src="arrow.svg"
            alt="arrow"
          />
        </div>
      </div>
    )}
    className="border-b"
    buttonProps={{
      className: "flex w-full p-4 text-left",
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

export default AccordionItem;
