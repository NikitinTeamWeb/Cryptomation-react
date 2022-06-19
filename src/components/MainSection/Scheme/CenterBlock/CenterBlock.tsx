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
          values="1; 1.1; 1.1; 1"
          keyTimes="0; 0.4; 0.7; 1"
          dur=".5s"
          begin="startButton.click + .5s"
          // repeatCount="indefinite"
        />
      </g>
      <animateTransform
        attributeName="transform"
        type="translate"
        values="0,0; -67, -30; -67, -30; 0,0"
        keyTimes="0; 0.4; 0.7; 1"
        dur=".5s"
        begin="startButton.click + .5s"
        // repeatCount="indefinite"
      />
    </g>
  );
};

export default CenterBlock;
