import React, {
  useRef,
  useEffect,
  useState,
  useLayoutEffect,
  FC,
  ReactNode,
} from 'react';

interface IProps {
  children: ReactNode;
}

const BlocksHeight: FC<IProps> = ({ children }) => {
  const childrenRef = useRef([]);
  const [width] = useWindowSize();
  const [heightBlock, setHeightBlock] = useState(0);

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }

  useEffect(() => {
    renderHeight();
  }, [width]);

  const renderHeight = () => {
    childrenRef.current.map((item) => {
      item.style.height = 'auto';
      if (item.offsetHeight > heightBlock) {
        setHeightBlock(item.offsetHeight);
      }
    });
  };

  useEffect(() => {
    childrenRef.current.map((item) => {
      return (item.style.height = heightBlock + 'px');
    });
  }, [heightBlock, childrenRef, width]);

  return (
    <>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          ref: (ref) => (childrenRef.current[index] = ref),
        })
      )}
    </>
  );
};

export default BlocksHeight;
