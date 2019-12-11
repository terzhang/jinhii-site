/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../../theme';
import { linedChibis, linelessChibis } from '../../assets/chibis/index';
import Fieldset from '../../components/Fieldset';
import RenderList from '../../components/RenderList';
import ImageGridGallery from '../../components/ImageGridGallery';

const Chibis = ({ containerStyle }) => {
  containerStyle = {
    width: '100%',
    height: 'fit-content',
    // container needs to flex to fit child contents
    display: 'flex',
    flexDirection: 'column',
    ...containerStyle
  };

  const handleSubmit = fields => {
    console.log(fields);
  };

  const fieldList = [
    { label: 'username/alias', placeholder: '' },
    { label: 'type', placeholder: 'lined/lineless chibi' },
    { label: 'references', placeholder: '(images)' },
    { label: 'clear description of what you want', placeholder: '' },
    { label: 'important notes/questions', placeholder: '' }
  ];

  const lineChibiDetails = [
    'cleaned sketch - 35 USD per character',
    'thick lines - 65 USD per character',
    'thin lines - 70 USD per character',
    'transparent/simple pattern/color/gradient background - included',
    'semi-detailed background - 5-25 USD',
    'detailed background - 30+ USD'
  ];

  return (
    <div css={containerStyle}>
      <h2 css={{ ...theme.heading, textAlign: 'center' }}>✧ c h i b i s ✧</h2>
      {/* Lined chibi gallery */}
      <h3 css={{ ...theme.heading, textAlign: 'center' }}>✧ Lined Chibis ✧</h3>
      <ImageGridGallery
        requireContext={linedChibis}
        imageStyle={{ width: '25vmin', height: 'auto', objectFit: 'contain' }}
      />
      <RenderList listArray={lineChibiDetails} label={null} />
      <h3 css={{ ...theme.heading, textAlign: 'center' }}>
        ✧ Lineless Chibis ✧
      </h3>
      <ImageGridGallery
        requireContext={linelessChibis}
        imageStyle={{ width: '25vmin', height: 'auto%', objectFit: 'contain' }}
      />
      <h3>✧ o r d e r - f o r m ✧</h3>
      <Fieldset
        formFields={fieldList}
        legend={'✧ Chibi Order Form ✧'}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Chibis;
