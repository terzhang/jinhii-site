/** @jsx jsx */
import { jsx } from '@emotion/core';
import LabelledList from '../../components/LabelledList';
import normals from '../../assets/normal/index';
import Fieldset from '../../components/Fieldset';
import ImageGridGallery from '../../components/ImageGridGallery';

const Normal = () => {
  const wrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: 'max-content'
  };

  const optionsList = [
    { label: 'Headshot', detail: '35 USD' },
    { label: 'Bust', detail: '45 USD' },
    { label: 'Halfbody (Simple)', detail: '55 USD' },
    { label: 'Halfbody (Complex)', detail: '75 USD' },
    { label: 'Fullbody (Simple)', detail: '100 USD' },
    { label: 'Fullbody (Complex)', detail: '150-200 USD' }
  ];

  const extrasList = [
    { label: 'Included', detail: 'Simple Pattern/Color/No BG' },
    {
      label: 'Detailed BG/Extras',
      detail: '+ 20-75 USD depending on difficulty'
    },
    {
      label: 'Complex/large props/companions',
      detail: '+ 10-50 USD depending on difficulty'
    }
  ];

  const formFields = [
    { label: 'username/alias', placeholder: '' },
    { label: 'style', placeholder: 'lined/lineless' },
    { label: 'type', placeholder: '(headshot/bust/waist/full)' },
    { label: 'character ref', placeholder: '(full image ref please)' },
    { label: 'pose/expression', placeholder: '' },
    { label: 'extras?', placeholder: '(large props/pets/etc)' },
    { label: 'important notes/questions', placeholder: '' }
  ];

  const handleFormSubmit = fields => console.log(fields);

  return (
    <div css={wrapperStyle}>
      {/* normal */}
      <h2 css={{ textAlign: 'center', justifySelf: 'center' }}>
        ✧ n o r m a l ✧
      </h2>
      <ImageGridGallery
        requireContext={normals}
        // gridSize={{ width: '10vh', height: '10vh' }}
        imageStyle={{ height: '10rem', width: '10rem', objectFit: 'cover' }}
      />
      {/* normal options */}
      <h3 css={{ textAlign: 'center', justifySelf: 'center' }}>
        ✧ Lined/Lineless ✧
      </h3>
      <LabelledList
        containerStyle={{}}
        listArray={optionsList}
        listStyle={{ gridTemplateColumns: '1fr 1fr' }}
      />
      <h3>Extras:</h3>
      <LabelledList
        containerStyle={{}}
        listArray={extrasList}
        listStyle={{ gridTemplateColumns: '1fr 1fr' }}
      />
      <p css={{ textAlign: 'center', justifySelf: 'center' }}>
        {`*Prices can be negotiated slightly if your
          character is very simple in design!
          (or way too detailed)`}
      </p>
      {/* Order form */}
      <h2 css={{ textAlign: 'center', justifySelf: 'center' }}>
        ✧ o r d e r - f o r m ✧
      </h2>
      <Fieldset
        formFields={formFields}
        legend={'✧ Normal Comm. Order Form ✧'}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};
export default Normal;
