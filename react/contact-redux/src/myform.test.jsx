import React from 'react';
import { MyFormComponent } from './myform';
import {mount, shallow, render} from 'enzyme';
import chai from 'chai';

import chaiEnzyme from 'chai-enzyme';

import sinon from "sinon";
import sinonChai from "sinon-chai";

chai.use(sinonChai);
chai.use(chaiEnzyme());
var expect = chai.expect;

test('My form test', () => {
  var on_submit = sinon.spy();
  
  const wrapper = shallow(
    <MyFormComponent contacts={[]} history={[]} onSubmit={on_submit}/>
  );
  expect(wrapper.instance().props.contacts)
    .deep.equal([]);
    
  expect(wrapper)
    .to.have.state('color').equal('blue');
  wrapper.instance().update_select({}, 0, 'red');
  expect(wrapper)
    .to.have.state('color').equal('red');
    
  wrapper.instance().handle_submit(
    {preventDefault: function () {}}
  );
  
  expect(on_submit).to.have.been.calledOnce;
});