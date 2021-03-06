import React from 'react';
import PropTypes from 'prop-types';

import SectionTemperatureInfos from './SectionTemperatureInfos';
import TemperatureImageInfos from './TemperatureImageInfos';
import TemperatureTextInfos from './TemperatureTextInfos';

import { TrendingDown, TrendingUp, Thermometer, Wind } from 'react-feather';
import { isMobile } from 'react-device-detect';
import ReactTooltip from 'react-tooltip';

const TemperatureInfos = ({
  sizeText,
  colorText,
  colorIcon,
  sizeIcon,
  tempMin,
  tempMax,
  humidity,
  wind
}) => (
  <SectionTemperatureInfos>
    <TemperatureTextInfos
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Minimum temperature"
    >
      <TemperatureImageInfos>
        <TrendingDown color={colorIcon} size={sizeIcon} />
      </TemperatureImageInfos>
      {tempMin} °C
    </TemperatureTextInfos>
    <TemperatureTextInfos
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Maximum temperature"
    >
      <TemperatureImageInfos>
        <TrendingUp color={colorIcon} size={sizeIcon} />
      </TemperatureImageInfos>
      {tempMax} °C
    </TemperatureTextInfos>
    <TemperatureTextInfos
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Humidity"
    >
      <TemperatureImageInfos margin={5}>
        <Thermometer color={colorIcon} size={sizeIcon} />
      </TemperatureImageInfos>
      {humidity}%
    </TemperatureTextInfos>
    <TemperatureTextInfos
      sizeText={sizeText}
      colorText={colorText}
      data-tip="Wind"
      margin={0}
    >
      <TemperatureImageInfos margin={8}>
        <Wind color={colorIcon} size={sizeIcon} />
      </TemperatureImageInfos>
      {wind}km/h
    </TemperatureTextInfos>
    {!isMobile && <ReactTooltip effect="solid" globalEventOff="click" />}
  </SectionTemperatureInfos>
);

TemperatureInfos.propTypes = {
  tempMin: PropTypes.number,
  tempMax: PropTypes.number,
  humidity: PropTypes.number,
  wind: PropTypes.number,
  sizeIcon: PropTypes.number,
  sizeText: PropTypes.number,
  colorIcon: PropTypes.string,
  colorText: PropTypes.string
};

export default TemperatureInfos;
