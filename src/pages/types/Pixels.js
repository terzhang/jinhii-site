/** @jsx jsx */
import { jsx } from '@emotion/core';
import ImageGridGallery from '../../components/ImageGridGallery';
import { bigPixels, smallPixels } from '../../assets/pixels/index';
import LabelledList from '../../components/LabelledList';
import Fieldset from '../../components/Fieldset';

const Pixels = () => {
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: 'max-content'
  };

  const optionList = [
    { label: '50x50 px', detail: '30 USD' },
    { label: '100x100 px', detail: '50 USD' },
    { label: 'Simple Animation', detail: '5 USD' }
  ];

  const fieldList = [
    { label: 'username/alias', placeholder: '' },
    { label: 'type', placeholder: 'pixel icon' },
    { label: 'size', placeholder: '(50x50 px / 100x100 px)' },
    { label: 'references', placeholder: '(images)' },
    { label: 'description', placeholder: 'clear description of what you want' },
    { label: 'important notes / questions', placeholder: '' }
  ];

  const handleSubmit = fields => console.log(fields);

  return (
    <div css={wrapperStyle}>
      <h2>✧ p i x e l s ✧</h2>
      <ImageGridGallery requireContext={smallPixels} />
      <p>click thumbnails to view full size!</p>
      <ImageGridGallery requireContext={bigPixels} />
      <h3>✧ Pixel Icons ✧</h3>
      <LabelledList
        listArray={optionList}
        listContainerStyle={{ gridTemplateColumns: '1fr 1fr' }}
      />
      <h2>✧ o r d e r - f o r m ✧</h2>
      <Fieldset
        formFields={fieldList}
        legend={'✧ Pixel Icon Order Form ✧'}
        onSubmit={handleSubmit}
      />
      <p>{`Contact me through one of the methods on the contacts page
        if you'd like to commission any pixel icon(s)!`}</p>
    </div>
  );
};

export default Pixels;
