import { Pannellum } from 'pannellum-react';
import { useRef, useState } from 'react';
import bgImage from './assets/images/bg.jpg';
function App() {
  const [mainImage] = useState(bgImage);
  const pannellumRef = useRef(null);

  const hanldeClickImage = (evt, args) => {
    console.log('EVENt', evt);
    console.log(args.name);
  };

  return (
    <div className='App'>
      <div>
        <Pannellum
          ref={pannellumRef}
          height='850px'
          image={mainImage}
          pitch={10}
          yaw={180}
          hfov={120}
          autoLoad
          author={'Dhencio'}
          title={'Fourello'}
        >
          <Pannellum.Hotspot
            type='info'
            pitch={11}
            yaw={-167}
            text='Fourello Page'
            URL='https://www.fourello.com/'
          />
          <Pannellum.Hotspot
            type='custom'
            pitch={31}
            yaw={150}
            handleClick={(evt, args) => hanldeClickImage(evt, args)}
            handleClickArg={{ name: 'test' }}
          />
        </Pannellum>
      </div>
    </div>
  );
}

export default App;
