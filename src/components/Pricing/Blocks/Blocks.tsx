import Block from '../Block/Block';

import styles from './blocks.module.scss';

const Blocks = () => {
  const arr = [
    {
      id: 0,
      title: 'Launch',
      subtitle: '300 K responses / month',
      price: 9,
      list: [
        {
          id: 0,
          text: 'Usage Metrics ',
        },
        {
          id: 1,
          text: 'Community Support ',
        },
        {
          id: 2,
          text: 'HTTPS & WSS Endpoints ',
        },
        {
          id: 3,
          text: 'Overage is $0.10 per 10k',
        },
      ],
      button: {
        type: 'get',
        text: 'Get started - 7 day free trial',
      },
    },
    {
      id: 1,
      title: 'Build',
      subtitle: '20 MLN responses / month',
      price: 49,
      list: [
        {
          id: 0,
          text: 'Launch Perks+ ',
        },
        {
          id: 1,
          text: 'Priority Support ',
        },
        {
          id: 2,
          text: '100 Free Archive Calls ',
        },
        {
          id: 3,
          text: 'Overage is $0.07 per 10',
        },
      ],
      button: {
        type: 'open',
        text: 'Open account',
      },
    },
    {
      id: 2,
      title: 'Scale',
      subtitle: '60 MLN responses / month',
      price: 299,
      list: [
        {
          id: 0,
          text: 'Pro Perks+ ',
        },
        {
          id: 1,
          text: 'Priority Support',
        },
        {
          id: 2,
          text: '300 Free Archive Calls ',
        },
        {
          id: 3,
          text: 'Overage is $0.05 per 10k',
        },
      ],
      button: {
        type: 'open',
        text: 'Open account',
      },
    },
    {
      id: 3,
      title: 'Enterprise',
      subtitle: '300K responses / month',
      price: 12,
      list: [
        {
          id: 0,
          text: 'Volume Discounts',
        },
        {
          id: 1,
          text: 'Faster SLA Time',
        },
        {
          id: 2,
          text: 'Bespoke Solutions',
        },
        {
          id: 3,
          text: 'White-Glove Support',
        },
      ],
      button: {
        type: 'contact',
        text: 'Contac us',
      },
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
