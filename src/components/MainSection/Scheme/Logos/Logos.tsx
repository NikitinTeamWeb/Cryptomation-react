import { FC, useEffect, useState } from 'react';
import styles from './logos.module.scss';
import cn from 'classnames';

import El1 from '../../../../assets/images/mainSection/scheme-el1.svg';
import El2 from '../../../../assets/images/mainSection/scheme-el2.svg';
import El3 from '../../../../assets/images/mainSection/scheme-el3.svg';
import El4 from '../../../../assets/images/mainSection/scheme-el4.svg';
import El5 from '../../../../assets/images/mainSection/scheme-el5.svg';
import El6 from '../../../../assets/images/mainSection/scheme-el6.svg';
import El7 from '../../../../assets/images/mainSection/scheme-el7.svg';
import El8 from '../../../../assets/images/mainSection/scheme-el8.svg';
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
      pathCenter: 'M675.5 213V153',
      centerStart: 'startButton.click + 5.5s',
      centerTranslate: '67, 50',
    },
    {
      id: 1,
      icon: <El2 />,
      path: 'M320 165C320 165 484 258 661.5 260.5',
      translate: '0 0; 0 24; 20 30',
      pathCenter: 'M675.5 213V153',
      centerStart: 'startButton.click + 7s',
      centerTranslate: '59, 56',
    },
    {
      id: 2,
      icon: <El3 />,
      path: 'M367 291C367 291 485.5 324 610 275',
      translate: '0 0; 0 24; 20 30',
      pathCenter: 'M675 212.816C669.143 215.398 629.364 190.521 628 155',
      centerStart: 'startButton.click + 5.5s',
      centerTranslate: '30, 50',
    },
    {
      id: 3,
      icon: <El4 />,
      path: 'M205.5 267.5C205.5 267.5 282.057 355.576 385 363C489 370.5 555 346 620 295',
      translate: '0 0; 0 24; 25 30',
      pathCenter: 'M675 212.816C669.143 215.398 629.364 190.521 628 155',
      centerStart: 'startButton.click + 7s',
      centerTranslate: '42, 57',
    },
    {
      id: 4,
      icon: <El5 />,
      path: 'M1185.5 64.9999C1185.5 64.9999 967.5 -4.00011 730 241.5',
      translate: '0 0; 0 24; 20 30',
      pathCenter: 'M675 212.816C669.143 215.398 629.364 190.521 628 155',
      centerStart: 'startButton.click + 8.5s',
      centerTranslate: '25, 25',
    },
    {
      id: 5,
      icon: <El6 />,
      path: 'M1030 165C1030 165 915.5 254 738 256.5',
      translate: '0 0; 0 24; 20 30',
      pathCenter: 'M675 213C680.857 215.568 720.636 190.827 722 155.5',
      centerStart: 'startButton.click + 5.5s',
      centerTranslate: '65, 49',
    },
    {
      id: 6,
      icon: <El7 />,
      path: 'M983 291C983 291 864.5 324 740 275',
      translate: '0 0; 0 24; 20 30',
      pathCenter: 'M675 213C680.857 215.568 720.636 190.827 722 155.5',
      centerStart: 'startButton.click + 7s',
      centerTranslate: '53, 57',
    },
    {
      id: 7,
      icon: <El8 />,
      path: 'M1144.5 267.5C1144.5 267.5 1067.94 355.576 965 363C861 370.5 795 346 730 295',
      translate: '0 0; 0 24; 20 30',
      pathCenter: 'M675 213C680.857 215.568 720.636 190.827 722 155.5',
      centerStart: 'startButton.click + 8.5s',
      centerTranslate: '53, 57',
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
      {arr.map(
        ({
          id,
          icon,
          path,
          translate,
          pathCenter,
          centerStart,
          centerTranslate,
        }) => {
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
                      dur="5s"
                      begin="startButton.click"
                    />
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="scale"
                      from=".5"
                      to=".5"
                      dur="3s"
                      begin={centerStart}
                    />
                  </g>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values={translate}
                    keyTimes="0; 0.8; 1"
                    dur="5s"
                    begin="startButton.click"
                  />
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    from={centerTranslate}
                    to={centerTranslate}
                    dur="3s"
                    begin={centerStart}
                  />
                </g>

                <animate
                  attributeType="CSS"
                  attributeName="opacity"
                  from="0"
                  to="0"
                  values="0; 1; 1; 0"
                  keyTimes="0; 0.2; 0.9; 1"
                  dur="5s"
                  begin="startButton.click"
                />

                <animate
                  attributeType="CSS"
                  attributeName="opacity"
                  from="0"
                  to="0"
                  values="0; 1; 1; 0"
                  keyTimes="0; 0.2; 0.9; 1"
                  dur="3s"
                  begin={centerStart}
                />

                <animateMotion dur="3s" begin={centerStart} path={pathCenter} />
                <animateMotion dur="5s" begin="startButton.click" path={path} />
              </g>
            </>
          );
        }
      )}
    </>
  );
};

export default Logos;
