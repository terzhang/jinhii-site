/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../theme';

const Home = ({ containerStyle }) => {
  containerStyle = {
    ...containerStyle,
    marginLeft: theme.general.margin, // to indent texts a bit
    marginRight: theme.general.margin,
    // position children
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
    'title' 'image' 'text'
    `,
    justifyItems: 'center'
  };

  const paragraphStyle = {
    gridArea: 'text',
    textAlign: 'center',
    fontSize: theme.text.fontSize,
    fontWeight: theme.text.fontWeight
  };

  return (
    <div css={containerStyle}>
      <h2 css={{ gridArea: 'title' }}>✧ w e l c o m e ✧</h2>
      <img
        css={{ gridArea: 'image', width: '50%' }}
        src={require('../assets/Black_Cat.png')}
        alt="Jinhii's black kitty"
      />
      <p css={paragraphStyle}>
        Hello! I'm Jinhii and I am a self-taught digital artist and freelancer.
        <br />I really love anime and cute animals(especially cats) and playing
        games like maplestory 2 in my free time!
        <br />I do various commissions such as chibis, icons, twitch
        emotes/badges, logos, etc. so please check them out if you're interested
        in getting anything from me!♡
      </p>
    </div>
  );
};

export default Home;
