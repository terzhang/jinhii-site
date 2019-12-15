/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../../theme';
import { linedChibis, linelessChibis } from '../../assets/chibis/index';
import Fieldset from '../../components/Fieldset';
import LabelledList from '../../components/LabelledList';
import ImageGridGallery from '../../components/ImageGridGallery';

const Chibis = ({ wrapperStyle }) => {
  wrapperStyle = {
    width: '100%',
    height: 'fit-content',
    // container needs to flex to fit child contents
    display: 'flex',
    flexDirection: 'column',
    ...wrapperStyle
  };

  const galleryColumns = 3;

  const imageWrapperStyle = {
    padding: '10px',
    width: `calc(100% / ${galleryColumns})`,
    height: 'auto'
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

  const linedOptions = [
    { label: 'cleaned sketch', detail: '35 USD per character' },
    { label: 'thick lines', detail: '65 USD per character' },
    { label: 'thin lines', detail: '70 USD per character' },
    { label: 'semi-detailed background', detail: '5-25 USD' },
    { label: 'detailed background', detail: '30+ USD' },
    'transparent/simple pattern/color/gradient background included'
  ];

  const linelessOptions = [
    { label: 'simple', detail: '35 USD / character' },
    { label: 'complex', detail: '50 USD / character' },
    { label: 'semi-detailed', detail: '5-25 USD' },
    { label: 'detailed', detail: '30+ USD' },
    'pattern/color/gradient background included'
  ];

  return (
    <div css={wrapperStyle}>
      <h2 css={{ ...theme.heading, textAlign: 'center' }}>✧ c h i b i s ✧</h2>
      {/* Lined chibi gallery */}
      <h3 css={{ ...theme.heading, textAlign: 'center' }}>✧ Lined Chibis ✧</h3>
      <ImageGridGallery
        requireContext={linedChibis}
        imageWrapperStyle={imageWrapperStyle}
        imageStyle={{ objectFit: 'contain' }}
      />
      <LabelledList listArray={linedOptions} />
      <h3 css={{ ...theme.heading, textAlign: 'center' }}>
        ✧ Lineless Chibis ✧
      </h3>
      <ImageGridGallery
        requireContext={linelessChibis}
        imageWrapperStyle={imageWrapperStyle}
        imageStyle={{ objectFit: 'contain' }}
      />
      <LabelledList listArray={linelessOptions} />
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
