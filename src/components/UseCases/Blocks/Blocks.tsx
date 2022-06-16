import Block from '../Block/Block';

import styles from './blocks.module.scss';

const Blocks = () => {
  const arr = [
    {
      id: 0,
      icon: '',
      title: 'Get account information',
      subtitle: '',
    },
    {
      id: 1,
      icon: '',
      title: 'Events to webhook',
      subtitle: 'Send information about you adresses to any webhook',
    },
    {
      id: 2,
      icon: '',
      title: 'Get blockhain info by GRPC',
      subtitle: 'Get any information about blockhain state by gRPC methods.',
    },
    {
      id: 3,
      icon: '',
      title: '<span>Analyse</span> blockchain',
      subtitle:
        'You could connect to us by JDBC drivers and analysin blockhain data.',
    },
    {
      id: 4,
      icon: '',
      title: 'Calculate gaz',
      subtitle: 'Use out api for prediction gas price to you transactions.',
    },
    {
      id: 5,
      icon: '',
      title: 'Move project from polygonscan, ethscan to us',
      subtitle:
        'If you use polygonscan api, you could move to our servers without downtime.',
    },
  ];

  return <div className={styles.blocks}></div>;
};

export default Blocks;
