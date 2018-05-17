import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import { findAllWithClass } from 'react-shallow-testutils';
import Textarea from './Textarea';

chai.use(sinonChai);

const renderer = createRenderer();

describe('Textarea', () => {
  let element, textarea, input, errors, characterCount;

  beforeEach(() => {
    errors = [];

    sinon.stub(console, 'error').callsFake(errorMessage => {
      errors.push(errorMessage);
    });
  });

  afterEach(() => {
    console.error.restore();
  });

  function render(jsx) {
    element = jsx;
    textarea = renderer.render(element);
    input = findAllWithClass(textarea, 'textarea')[0] || null;
    characterCount = findAllWithClass(textarea, 'characterCount')[0] || null;
  }

  it('should have a displayName', () => {
    render(<Textarea id="testTextarea" />);
    expect(element.type.displayName).to.equal('Textarea');
  });

  it('should pass through the value', () => {
    const wrapper = shallow(<Textarea id="testTextarea" value="foo" />);
    const textareaValue = wrapper.find('textarea').prop('value');
    expect(textareaValue).to.equal('foo');
  });

  it('should render without errors', () => {
    render(<Textarea id="testTextarea" />);
    expect(errors.length).to.equal(0);
  });

  it('should invoke the focus handler', () => {
    const onFocus = jest.fn();
    const wrapper = shallow(<Textarea id="testTextarea" onFocus={onFocus} />);
    wrapper.find('textarea').simulate('focus');
    expect(onFocus.mock.calls.length).to.equal(1);
  });

  it('should invoke the blur handler', () => {
    const onBlur = jest.fn();
    const wrapper = shallow(<Textarea id="testTextarea" onBlur={onBlur} />);
    wrapper.find('textarea').simulate('blur');
    expect(onBlur.mock.calls.length).to.equal(1);
  });

  it('should invoke the change handler', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<Textarea id="testTextarea" onChange={onChange} />);
    wrapper.find('textarea').simulate('change', { target: { value: 'foo' } });
    expect(onChange.mock.calls.length).to.equal(1);
    expect(onChange.mock.calls[0][0].target.value).to.equal('foo');
  });

  describe('id', () => {
    it('should error if `id` is not a string', () => {
      render(<Textarea id={true} />);
      expect(errors[0]).to.match(/Invalid prop `id`/);
    });
  });

  describe('inputProps', () => {
    it('should pass through className to the input', () => {
      render(<Textarea id="testTextarea" inputProps={{ className: 'first-name-field' }} />);
      expect(input.props.className).to.match(/first-name-field$/);
    });

    it('should pass through other props to the input', () => {
      render(<Textarea id="testTextarea" inputProps={{ id: 'firstName', value: 'value', 'data-automation': 'first-name-field' }} />);
      expect(input.props.id).to.equal('firstName');
      expect(input.props.value).to.equal('value');
      expect(input.props['data-automation']).to.equal('first-name-field');
    });
  });

  describe('valid', () => {
    describe('set to false', () => {
      it('Textarea should have the invalid className', () => {
        render(<Textarea id="testTextarea" valid={false} />);
        expect(textarea.props.className).to.contain('invalid');
      });
    });
  });

  describe('secondaryLabel', () => {
    it('should not be rendered by default', () => {
      render(<Textarea id="testTextarea" />);
      expect(textarea.props.children[0].props.secondaryLabel).to.equal('');
    });

    it('should pass secondaryLabel message if \`secondaryLabel\` is supplied', () => {
      render(<Textarea id="testTextarea" secondaryLabel="secondary" />);
      expect(textarea.props.children[0].props.secondaryLabel).to.equal('secondary');
    });
  });

  describe('description', () => {
    it('should not be rendered by default', () => {
      render(<Textarea id="testTextarea" />);
      expect(textarea.props.children[1]).to.equal(null);
    });

    it('should render description when specified', () => {
      render(<Textarea id="testTextarea" description="test" />);
      expect(textarea.props.children[1].props.children).to.equal('test');
    });
  });

  describe('characterCount', () => {
    it('should not be rendered by default', () => {
      render(<Textarea id="testTextarea" />);
      expect(characterCount).to.equal(null);
    });

    it('should error if \`countFeedback\` is not a function', () => {
      render(<Textarea id="testTextarea" countFeedback={true} />);
      expect(errors[0]).to.match(/Invalid prop `countFeedback`/);
    });

    it('should error if \`countFeedback\` is supplied without a value', () => {
      const countFeedback = v => ({ count: v.length });
      render(<Textarea id="testTextarea" countFeedback={countFeedback} />);
      expect(errors[0]).to.match(/`value` must be supplied if `countFeedback` is set/);
    });

    it('should show count value if \`countFeedback\` function is supplied correctly', () => {
      const countFeedback = v => ({ count: v.length });
      render(<Textarea id="testTextarea" countFeedback={countFeedback} value="Test value" />);
      expect(characterCount.props.children).to.equal(10);
    });

    it('should show count value if value is blank', () => {
      const countFeedback = v => ({ count: 500 - v.length });
      render(<Textarea id="testTextarea" countFeedback={countFeedback} value="" />);
      expect(characterCount.props.children).to.equal(500);
    });

    it('should hide count value if \`countFeedback\` function returns \`{ show: false }\`', () => {
      const countFeedback = () => ({ show: false });
      render(<Textarea id="testTextarea" countFeedback={countFeedback} value="Test value" />);
      expect(characterCount).to.equal(null);
    });

    describe('inputProps', () => {
      it('should show count value if \`countFeedback\` function is supplied correctly', () => {
        const countFeedback = v => ({ count: v.length });
        render(<Textarea id="testTextarea" countFeedback={countFeedback} inputProps={{ value: 'Test value' }} />);
        expect(characterCount.props.children).to.equal(10);
      });

      it('should show count value if value is blank', () => {
        const countFeedback = v => ({ count: 500 - v.length });
        render(<Textarea id="testTextarea" countFeedback={countFeedback} inputProps={{ value: '' }} />);
        expect(characterCount.props.children).to.equal(500);
      });

      it('should hide count value if \`countFeedback\` function returns \`{ show: false }\`', () => {
        const countFeedback = () => ({ show: false });
        render(<Textarea id="testTextarea" countFeedback={countFeedback} inputProps={{ value: 'Test value' }} />);
        expect(characterCount).to.equal(null);
      });
    });
  });
});
