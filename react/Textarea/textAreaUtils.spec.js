import { formatInvalidText } from './textAreaUtils.js';

describe('contentEditableUtils', () => {
  describe('formatInvalidText', () => {
    const style = 'my-class-name';

    describe('invalidText is a string', () => {
      it('should do nothing if there is no invalid text', () => {
        const value = 'my text';
        const invalidText = '';
        expect(formatInvalidText(value, invalidText, style)).toEqual('my text');
      });

      it('should render text with no required formatting correctly', () => {
        const value = 'text';
        const invalidText = 'bad text';
        expect(formatInvalidText(value, invalidText, style)).toEqual('text');
      });

      it('should render text with formatting correctly', () => {
        const value = 'my bad text';
        const invalidText = 'bad text';
        expect(formatInvalidText(value, invalidText, style)).toEqual(
          'my <mark class="my-class-name">bad text</mark>'
        );
      });

      it('should apply formatting to multiple instances of matched values', () => {
        const value = 'very very very bad text';
        const invalidText = 'very';
        expect(formatInvalidText(value, invalidText, style)).toEqual(
          '<mark class="my-class-name">very</mark> <mark class="my-class-name">very</mark> <mark class="my-class-name">very</mark> bad text'
        );
      });
    });

    describe('invalidText is an object / range', () => {
      it('should do nothing if there is no invalid text', () => {
        const value = 'my string of text';
        const invalidText = {
          start: 6
        };
        expect(formatInvalidText(value, invalidText, style)).toEqual(
          'my str<mark class="my-class-name">ing of text</mark>'
        );
      });

      it('should do nothing if there is no invalid text', () => {
        const value = 'my longer text';
        const invalidText = {
          start: 3,
          end: 9
        };
        expect(formatInvalidText(value, invalidText, style)).toEqual(
          'my <mark class="my-class-name">longer</mark> text'
        );
      });

      describe('highlighting multiple ranges', () => {
        it('can highlight three seperate ranges', () => {
          const value = 'my longer text';
          const invalidText = [
            {
              start: 3,
              end: 6
            },
            {
              start: 7,
              end: 8
            },
            {
              start: 12,
              end: 13
            }
          ];
          expect(formatInvalidText(value, invalidText, style)).toEqual(
            'my <mark class="my-class-name">lon</mark>g<mark class="my-class-name">e</mark>r te<mark class="my-class-name">x</mark>t'
          );
        });

        it('highlights correctly when only the first range is present', () => {
          const value = 'aaaaaaaaaabbb';
          const invalidText = [
            {
              start: 10,
              end: 20
            },
            {
              start: 30,
              end: 40
            }
          ];
          expect(formatInvalidText(value, invalidText, style)).toEqual(
            'aaaaaaaaaa<mark class="my-class-name">bbb</mark>'
          );
        });
      });
    });
  });
});
