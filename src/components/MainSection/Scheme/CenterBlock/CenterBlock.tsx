import CircleSvg from '../../../../assets/images/mainSection/scheme-centerCircle.svg';

const CenterBlock = () => {
  return (
    <g>
      <g>
        <CircleSvg />
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="scale"
          values="1; 1.15; 1.15; 1"
          keyTimes="0; 0.4; 0.5; 1"
          dur="4s"
          begin="startButton.click + 4.2s"
        />
      </g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; -100, -35; -100, -35; 0,0"
        keyTimes="0; 0.4; 0.5; 1"
        dur="4s"
        begin="startButton.click + 4.2s"
      />
    </g>
  );
};

export default CenterBlock;
