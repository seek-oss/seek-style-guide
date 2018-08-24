/* eslint-disable react/jsx-key */
import React from 'react';
import { formatInvalidText } from './textAreaUtils.js';
import Highlight from '../Highlight/Highlight';

describe('contentEditableUtils', () => {
  describe('formatInvalidText', () => {
    const style = 'my-class-name';

    describe('invalidText is a string', () => {
      it('should do nothing if there is no invalid text', () => {
        const value = 'my text';
        const invalidText = '';
        expect(formatInvalidText(value, invalidText, style)).toEqual(['my text']);
      });

      it('should render text with no required formatting correctly', () => {
        const value = 'text';
        const invalidText = 'bad text';
        expect(formatInvalidText(value, invalidText, style)).toEqual(['text']);
      });

      it('should render text with formatting correctly', () => {
        const value = 'my bad text';
        const invalidText = 'bad text';
        expect(formatInvalidText(value, invalidText, style)).toEqual([
          'my ',
          <Highlight className="my-class-name" tone="critical">bad text</Highlight>
        ]);
      });

      it('should apply formatting to multiple instances of matched values', () => {
        const value = 'very very very bad text';
        const invalidText = 'very';
        expect(formatInvalidText(value, invalidText, style)).toEqual([
          <Highlight className="my-class-name" tone="critical">very</Highlight>,
          ' ',
          <Highlight className="my-class-name" tone="critical">very</Highlight>,
          ' ',
          <Highlight className="my-class-name" tone="critical">very</Highlight>,
          ' bad text'
        ]);
      });
    });

    describe('invalidText is an object / range', () => {
      it('should do nothing if there is no invalid text', () => {
        const value = 'my string of text';
        const invalidText = {
          start: 6
        };
        expect(formatInvalidText(value, invalidText, style)).toEqual([
          'my str',
          <Highlight className="my-class-name" tone="critical">ing of text</Highlight>
        ]);
      });

      it('should do nothing if there is no invalid text', () => {
        const value = 'my longer text';
        const invalidText = {
          start: 3,
          end: 9
        };
        expect(formatInvalidText(value, invalidText, style)).toEqual([
          'my ',
          <Highlight className="my-class-name" tone="critical">longer</Highlight>,
          ' text'
        ]);
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
          expect(formatInvalidText(value, invalidText, style)).toEqual([
            'my ',
            <Highlight className="my-class-name" tone="critical">lon</Highlight>,
            'g',
            <Highlight className="my-class-name" tone="critical">e</Highlight>,
            'r te',
            <Highlight className="my-class-name" tone="critical">x</Highlight>,
            't'
          ]);
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
          expect(formatInvalidText(value, invalidText, style)).toEqual([
            'aaaaaaaaaa',
            <Highlight className="my-class-name" tone="critical">bbb</Highlight>
          ]);
        });
      });
    });
  });
});
