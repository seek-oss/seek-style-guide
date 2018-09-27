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
          <Highlight className="my-class-name" tone="critical" key="0">bad text</Highlight>
        ]);
      });

      it('should apply formatting to multiple instances of matched values', () => {
        const value = 'very very very bad text';
        const invalidText = 'very';
        expect(formatInvalidText(value, invalidText, style)).toEqual([
          <Highlight className="my-class-name" tone="critical" key="0">very</Highlight>,
          ' ',
          <Highlight className="my-class-name" tone="critical" key="1">very</Highlight>,
          ' ',
          <Highlight className="my-class-name" tone="critical" key="2">very</Highlight>,
          ' bad text'
        ]);
      });
    });

    describe('invalidText is an object / range', () => {
      it('should return the unformatted text if no highlighting is required', () => {
        const value = 'aaaaaaaaa bbbbbbbbbb';
        const invalidText = { start: 30 };
        expect(formatInvalidText(value, invalidText, style)).toEqual([
          'aaaaaaaaa bbbbbbbbbb'
        ]);
      });

      it('should highlight from a start point to the end of a string', () => {
        const value = 'my string of text';
        const invalidText = {
          start: 6
        };
        expect(formatInvalidText(value, invalidText, style)).toEqual([
          'my st',
          <Highlight className="my-class-name" tone="critical" key="0">ring of text</Highlight>
        ]);
      });

      it('should highlight a single character', () => {
        const value = 'my string of text';
        const invalidText = {
          start: 1,
          end: 1
        };
        expect(formatInvalidText(value, invalidText, style)).toEqual([
          <Highlight className="my-class-name" tone="critical" key="0">m</Highlight>,
          'y string of text'
        ]);
      });

      describe('should highlight a range', () => {
        it('should highlight correctly', () => {
          const value = 'my longer text';
          const invalidText = {
            start: 3,
            end: 10
          };
          expect(formatInvalidText(value, invalidText, style)).toEqual([
            'my',
            <Highlight className="my-class-name" tone="critical" key="0"> longer </Highlight>,
            'text'
          ]);
        });
        it('should highlight correctly', () => {
          const value = 'this is a test string of text';
          const invalidText = {
            start: 10,
            end: 20
          };
          expect(formatInvalidText(value, invalidText, style)).toEqual([
            'this is a',
            <Highlight className="my-class-name" tone="critical" key="0"> test strin</Highlight>,
            'g of text'
          ]);
        });
      });

      describe('highlighting multiple ranges', () => {
        it('can highlight three seperate ranges', () => {
          const value = 'my longer text';
          const invalidText = [
            {
              start: 4,
              end: 6
            },
            {
              start: 8,
              end: 8
            },
            {
              start: 13,
              end: 13
            }
          ];
          expect(formatInvalidText(value, invalidText, style)).toEqual([
            'my ',
            <Highlight className="my-class-name" tone="critical" key="0">lon</Highlight>,
            'g',
            <Highlight className="my-class-name" tone="critical" key="1">e</Highlight>,
            'r te',
            <Highlight className="my-class-name" tone="critical" key="2">x</Highlight>,
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
            'aaaaaaaaa',
            <Highlight className="my-class-name" tone="critical" key="0">abbb</Highlight>
          ]);
        });
      });
    });
  });
});
