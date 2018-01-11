import getYearOptions from './getYearOptions';

describe('getYearOptions', () => {
  it('should return years in descending order', () => {
    expect(getYearOptions(2000, 2005, false)).toEqual([
      {
        value: '2005',
        label: '2005'
      },
      {
        value: '2004',
        label: '2004'
      },
      {
        value: '2003',
        label: '2003'
      },
      {
        value: '2002',
        label: '2002'
      },
      {
        value: '2001',
        label: '2001'
      },
      {
        value: '2000',
        label: '2000'
      }
    ]);
  });

  it('should return years in ascending order', () => {
    expect(getYearOptions(2021, 2025, true)).toEqual([
      {
        value: '2021',
        label: '2021'
      },
      {
        value: '2022',
        label: '2022'
      },
      {
        value: '2023',
        label: '2023'
      },
      {
        value: '2024',
        label: '2024'
      },
      {
        value: '2025',
        label: '2025'
      }
    ]);
  });
});
