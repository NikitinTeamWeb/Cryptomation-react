import { FC, useEffect, useState } from 'react';
import styles from './logos.module.scss';
import cn from 'classnames';

import El1 from '../../../../assets/images/mainSection/scheme-el1.svg';
import El2 from '../../../../assets/images/mainSection/scheme-el2.svg';

interface IProps {
  isAnimate: boolean;
}

const Logos: FC<IProps> = ({ isAnimate }) => {
  const arr = [
    {
      id: 0,
      icon: <El1 />,
      path: 'M164.5 65C164.5 65 390 -3.00015 658 271.5',
      translate: '0 0; 0 0; 20 10',
    },
    {
      id: 1,
      icon: <El2 />,
      path: 'M320 165C320 165 484 258 661.5 260.5',
      translate: '0 0; 0 0; 20 10',
    },
  ];

  useEffect(() => {
    console.log(isAnimate);
  }, [isAnimate]);

  return (
    <>
      <rect
        id="startButton"
        x="19.5"
        y="62.5"
        rx="5"
        height="25"
        width="80"
        fill="#EFEFEF"
        stroke="black"
        stroke-width="1"
      />
      {arr.map(({ id, icon, path, translate }) => {
        return (
          <>
            <g
              className={cn([styles[`el-${id}`]], styles.element)}
              id={'el-' + id}
            >
              <g>
                <g className={cn({ [styles.animate]: isAnimate })}>
                  {icon}
                  <animateTransform
                    attributeName="transform"
                    attributeType="XML"
                    type="scale"
                    from="1"
                    to=".7"
                    dur="7s"
                    begin="startButton.click"
                    repeatCount="indefinite"
                  />
                </g>
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values={translate}
                  keyTimes="0; 0.8; 1"
                  dur="7s"
                  begin="startButton.click"
                  repeatCount="indefinite"
                />
              </g>

              <animate
                attributeType="CSS"
                attributeName="opacity"
                from="0"
                to="0"
                values="0; 1; 1; 0"
                keyTimes="0; 0.2; 0.9; 1"
                dur="7s"
                begin="startButton.click"
                repeatCount="indefinite"
              />
              <animateMotion
                dur="7s"
                begin="startButton.click"
                path={path}
                repeatCount="indefinite"
              />
            </g>
          </>
        );
      })}
    </>
  );
};

export default Logos;
