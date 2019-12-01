/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../theme';

const About = ({ containerStyle }) => {
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
    textAlign: 'start',
    fontSize: theme.text.fontSize,
    fontWeight: theme.text.fontWeight
  };

  return (
    <div css={containerStyle}>
      <h2 css={{ gridArea: 'title' }}>✧ a b o u t ✧</h2>
      <img
        css={{ gridArea: 'image', width: '50%' }}
        src={require('../assets/Smol_Cheeb_Witch_Celeste.png')}
        alt="Jinhii's Smol Witch - Celeste"
      />
      <p css={paragraphStyle}>
        <strong>Name/Alias ✧</strong> Jinhii (basically my korean name 진희)
        <br />
        <strong>Nicknames ✧</strong> Jin, Jinjin, Jinny/Jinnie, etc
        <br />
        <strong>Occupation ✧</strong> Freelance Digital Artist/Graphic Designer
        <br />
        <strong>Country ✧</strong> United States
        <br />
        <strong>Ethnicity ✧</strong> Korean
        <br />
        <strong>Likes ✧</strong> Drawing, Singing, Cats, Anime, Cute
        things/animals/people, Food, Boba, Sleep, 2D characters, Music (mostly
        weeb music lol), MS2
        <br />
        <strong>Tools ✧</strong> Art: Wacom Intuos 5 Tablet (small), Paint Tool
        SAI (main), Clip Studio Paint (occasionally) | Covers: Rode NT USB Mic,
        Mixcraft 7, FL Studio (for newtone plugin)
      </p>
    </div>
  );
};

export default About;
