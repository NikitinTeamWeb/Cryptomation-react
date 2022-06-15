import styles from './blocks.module.scss';
import Block from '../Block/Block';

const Blocks = () => {
  const arr = [
    {
      id: 0,
      title: 'GRPC methods',
      text: "Don't want unexpected errors in your code? Use our strongly typed APIs with proto",
      imageText: '',
      link: '',
    },
    {
      id: 1,
      title: 'Rest API',
      text: '<span>Getting crypto data</span> in you web3 app with any http client. ',
      imageText: '',
      link: '',
    },
    {
      id: 2,
      title: 'GRPC methods',
      text: 'Need specific information for data analysis?<br><span>Get access</span>to the blockchain through the <span>database</span>. Build your reports and visualize on any BI',
      image: '',
      link: '',
    },
  ];

  // arrayBuffer

  return (
    <div className={styles.blocks}>
      {arr.map(({ id, title, text, imageText, image, link }) => {
        return (
          <div className={styles.block}>
            <Block title={title} text={text} link={link}/>
          </div>
        );
      })}
    </div>
  );
};

export default Blocks;
