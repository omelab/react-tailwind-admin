import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface CollapseProps {
  label: string;
  step: number;
  path: string;
  icon?: string;
  isSections?: boolean;
  childs?: any[] | undefined;
  children?: React.ReactNode;
  onChildExpand?: (height: number) => void;
}

const NavCollaps: React.FC<CollapseProps> = ({
  label,
  path,
  icon,
  childs,
  step = 1,
  isSections = false,
  onChildExpand,
  children,
}) => {
  const location = useLocation();

  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (contentRef.current) {
  //     contentRef.current.style.maxHeight = expanded ? `${contentRef.current.scrollHeight}px` : '0';
  //   }
  // }, [expanded]);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = expanded ? `${contentHeight}px` : '0';

      if (expanded && onChildExpand) {
        onChildExpand(contentHeight);
      }
    }
  }, [expanded, onChildExpand]);

  const toggleCollapse = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const isParentActive = (parentPath: string) => {
    const defaultClass = `ease-in-out text-sm leading-default py-2.7 active after:ease-in-out after:font-awesome my-0 mx-2 flex items-center whitespace-nowrap px-4 font-medium text-slate-500 shadow-none transition-colors after:ml-auto after:inline-block after:font-bold after:text-slate-800/50 after:antialiased after:transition-all after:duration-200 after:content-['\\f107'] dark:text-white dark:opacity-80 dark:after:text-white`;

    if (location.pathname == parentPath) {
      return `after:ease-in-out after:font-awesome ease-in-out text-sm leading-default py-2.7 my-0 mx-2 flex items-center whitespace-nowrap rounded-lg bg-blue-500/30 px-4 font-semibold text-slate-700 transition-all after:ml-auto after:inline-block after:rotate-180 after:font-bold dark:after:text-white after:text-slate-800 after:antialiased after:transition-all after:duration-200 after:content-['\\f107'] dark:text-white dark:opacity-80`;
    }

    return expanded
      ? `${defaultClass} after:rotate-180`
      : `${defaultClass} dark:after:text-white/50`;
  };

  const getActiveClass = (linkPath: string) => {
    let defaultClass =
      'ease-in-out py-2.7 ml-5.4 pl-4 leading-default text-sm relative my-0 mr-2 flex items-center whitespace-nowrap bg-transparent pr-4 shadow-none transition-colors  dark:text-white';

    if (icon) {
      defaultClass =
        'ease-in-out text-sm leading-default py-2.7 my-0 mx-2 flex items-center whitespace-nowrap px-4 dark:text-white dark:opacity-80';

      return `${defaultClass} ${
        location.pathname == linkPath
          ? ' rounded-lg bg-blue-500/30 font-semibold text-slate-700'
          : ' font-medium text-slate-500 shadow-none transition-colors'
      }`;
    }

    return `${defaultClass} ${
      location.pathname == linkPath
        ? ' rounded-lg font-semibold text-slate-800  dark:opacity-100'
        : ' font-medium text-slate-800/50 dark:opacity-60'
    }`;
  };

  if (isSections === true) {
    return (
      <li className='mt-0.5 w-full'>
        <hr className='h-px my-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent' />
        <h6 className='pl-6 mb-2 ml-2 text-xs font-bold leading-tight uppercase opacity-60 dark:text-white'>
          {label}
        </h6>
      </li>
    );
  }
  if (childs && childs.length > 0) {
    return (
      <li className={`${step == 1 ? 'mt-0.5' : ''}  w-full`}>
        <Link
          to={path}
          className={isParentActive(path)}
          onClick={toggleCollapse}
          aria-expanded={expanded}
        >
          <i className={icon}></i>
          <span className='ml-1 duration-300 opacity-100 pointer-events-none ease'>{label}</span>
        </Link>

        <div
          ref={contentRef}
          className={`h-auto overflow-hidden transition-all duration-200 ease-in-out ${
            expanded ? '' : 'max-h-0'
          }`}
        >
          <ul className='flex flex-wrap mb-0 ml-6 list-none transition-all duration-200 ease-in-out'>
            {childs &&
              childs.map((cData, index) => {
                return (
                  <NavCollaps
                    key={index}
                    label={cData.label}
                    path={cData.path}
                    step={step + 1}
                    isSections={cData.isSections}
                    childs={cData.childs}
                  ></NavCollaps>
                );
              })}
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className={`${step == 1 ? 'mt-0.5' : ''}  w-full`}>
      <Link to={path} className={getActiveClass(path)}>
        {icon && icon != '' ? (
          <div className='stroke-none flex h-8 w-8 items-center justify-center rounded-lg bg-center fill-current p-2.5 text-center text-black'>
            <i className={icon}></i>
          </div>
        ) : (
          ''
        )}
        <span
          className={`${
            icon && icon != '' ? ' ml-1' : ''
          } transition-all duration-100 pointer-events-none ease dark:text-white`}
        >
          {label}
        </span>
      </Link>
      {children}
    </li>
  );
};

export default NavCollaps;
