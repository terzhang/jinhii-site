/** @jsx jsx */
import { jsx } from '@emotion/core';
import theme from '../theme';
import RenderList from '../components/RenderList';

const ToS = ({ containerStyle }) => {
  containerStyle = {
    marginLeft: theme.general.margin, // to indent texts a bit
    marginRight: theme.general.margin,
    // position children
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    gridTemplateRows: 'auto',
    gridTemplateAreas: `
    'title' 'text'
    `,
    justifyItems: 'center',
    pointerEvents: 'auto',
    ...containerStyle
  };

  const paragraphStyle = {
    gridArea: 'text',
    textAlign: 'start',
    fontSize: theme.text.fontSize,
    fontWeight: theme.text.fontWeight
  };

  const terms = [
    `✧ All prices are in USD! I only accept Paypal and NX Prepaid but may
        accept mesos for MapleStory 2 commissions (however, USD is always
        highest priority!)`,
    `✧ If paying in mesos, 1USD = 3mil mesos`,
    `✧ All commissions are for PERSONAL use ONLY unless you purchase
        commercial usage rights from me!`,
    `✧ As of now, my commercial rates are 200% of normal prices. There for a
        50USD commission will be 100USD if you wanted to use it
        commercially/make profit from it. This is only a base to calculate with,
        however, and may change depending on the circumstances.`,
    `✧ I CAN rush commissions if needed for a rush fee, and my rush fees are
        10-30% of the commission price depending on how much of a rush is
        needed.`,
    `✧ I will do my best to accommodate any requests/needs you have so feel
        free to ask if you have any concerns~`,
    `✧ I require clear visual references for characters you want drawn, I can
        work with words as well but there must be at least one good reference in
        image form.`,
    `✧ I will not start your commission before payment is received!`,
    `✧ Please be willing to wait up to a month for your commission; I will do
        my best to get to it asap but there may be circumstances where I may
        take awhile.`,
    `✧ Please let me know beforehand if you need something by a deadline!
        Tight deadlines may require a rush fee.`,
    `✧ I may cancel and refund your commission whenever if I absolutely need
        to due to circumstances, and you may request to cancel and get a refund
        depending on the progress.`,
    `✧ Please do NOT edit/repost any of my commissions/fanart without
        permission unless you are the one who commissioned the piece!`
  ];

  return (
    <div css={containerStyle}>
      <h2 css={{ gridArea: 'title', ...theme.heading, textAlign: 'center' }}>
        {'✧ t e r m s - o f - s e r v i c e ✧'}
      </h2>
      <p css={paragraphStyle}>
        <strong
          css={{ display: 'grid', textAlign: 'center', fontWeight: 'bold' }}
        >
          {`By commissioning me, you are agreeing to my terms of service, 
          so please read it thoroughly before commissioning!`}
        </strong>
        <RenderList listArray={terms} />
      </p>
    </div>
  );
};

export default ToS;
