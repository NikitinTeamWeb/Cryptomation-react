import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';
import Block from '../Block/Block';

import styles from './blocks.module.scss';

import AccountIcon from '../../../assets/images/UseCases/account.svg';
import AnalyseIcon from '../../../assets/images/UseCases/analyse.svg';
import CalculateIcon from '../../../assets/images/UseCases/calculate.svg';
import EventsIcon from '../../../assets/images/UseCases/events.svg';
import GetBlockchainIcon from '../../../assets/images/UseCases/get_blockchain.svg';
import MoveIcon from '../../../assets/images/UseCases/move.svg';

const Blocks = () => {
  const arr = [
    {
      id: 0,
      icon: <AccountIcon />,
      title: 'Get account information',
      text: '<span>Get balance,transactions</span>   by any adrerss and any network by 1 http request',
      link: '',
    },
    {
      id: 1,
      icon: <EventsIcon />,
      title: 'Events to webhook',
      text: 'Send information about you adresses to any webhook',
      link: '',
    },
    {
      id: 2,
      icon: <GetBlockchainIcon />,
      title: 'Get blockhain info by GRPC',
      text: 'Get any information about blockhain state by gRPC methods.',
      link: '',
    },
    {
      id: 3,
      icon: <AnalyseIcon />,
      title: '<span>Analyse</span> blockchain',
      text: 'You could connect to us by JDBC drivers and analysin blockhain data.',
      link: '',
    },
    {
      id: 4,
      icon: <CalculateIcon />,
      title: 'Calculate gaz',
      text: 'Use out api for prediction gas price to you transactions.',
      link: '',
    },
    {
      id: 5,
      icon: <MoveIcon />,
      title: 'Move project from polygonscan, ethscan to us',
      text: 'If you use polygonscan api, you could move to our servers without downtime.',
      link: '',
    },
  ];

  return (
    <div className={styles.blocks}>
      {arr.map((item) => {
        return (
          <div className={styles.block} key={item.id}>
            <Block item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Blocks;
