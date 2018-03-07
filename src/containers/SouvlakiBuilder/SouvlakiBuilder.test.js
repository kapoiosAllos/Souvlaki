import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SouvlakiBuilder } from './SouvlakiBuilder';
import BuildControls from '../../components/Souvlaki/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<SouvlakiBuilder />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SouvlakiBuilder onInitIngredients={() => {}}/>);
  });

  it('should render <BuildControls /> when receiving ingredients', () => {
    wrapper.setProps({ings: {salad: 0}});
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });
});
