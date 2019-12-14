/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../theme';
import LabelledList from '../components/LabelledList';

const About = ({ containerStyle }) => {
  containerStyle = {
    marginLeft: theme.general.margin, // to indent texts a bit
    marginRight: theme.general.margin,
    // position children
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    ...containerStyle
  };

  const paragraphStyle = {
    textAlign: 'start',
    fontSize: theme.text.fontSize,
    fontWeight: theme.text.fontWeight,
    border: 'none',
    // allow interaction
    pointerEvents: 'auto'
  };

  const nestedArray = [
    { label: 'Name/Alias', detail: 'Jinhii (basically my korean name 진희)' },
    { label: 'Nicknames', detail: 'Jin, Jinjin, Jinny/Jinnie, etc' },
    {
      label: 'Occupation',
      detail: 'Freelance Digital Artist/Graphic Designer'
    },
    { label: 'Country', detail: 'United States' },
    { label: 'Ethnicity', detail: 'Korean' },
    {
      label: 'Likes',
      detail: `Drawing, Singing, Cats, Anime, Cute things/animals/people,
      Food, Boba, Sleep, 2D characters, Music (mostly weeb music lol), MS2`
    },
    {
      label: 'Tools',
      detail: [
        {
          label: 'Art',
          detail: [
            'Wacom Intuos 5 Tablet (small)',
            'Paint Tool SAI (main)',
            'Clip Studio Paint (occasionally)'
          ]
        },
        {
          label: 'Covers',
          detail: [
            'Rode NT USB Mic',
            'Mixcraft 7',
            'FL Studio (for newtone plugin)'
          ]
        }
      ]
    }
  ];

  return (
    <div css={containerStyle}>
      <h2>✧ a b o u t ✧</h2>
      <img
        css={{ objectFit: 'contain', height: '50%' }}
        src={require('../assets/Smol_Cheeb_Witch_Celeste.png')}
        alt="Jinhii's Smol Witch - Celeste"
      />
      <LabelledList
        listArray={nestedArray}
        listStyle={{ gridTemplateColumns: '1fr 4fr' }}
        containerStyle={paragraphStyle}
      />
    </div>
  );
};

export default About;
