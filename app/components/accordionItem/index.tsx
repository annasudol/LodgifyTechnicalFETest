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
}
const AccordionItem: React.FC<AccordionItem> = ({ title, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <div className="flex justify-between w-full">
        <p className="flex text-customGrey-300">
          <Image
            width={15}
            height={15}
            src="doc.svg"
            alt="doc"
            className="mr-2 w-auto h-auto"
          />
          {title}
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
